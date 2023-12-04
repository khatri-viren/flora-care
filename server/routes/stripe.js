import { Router } from "express";
import Product from "../models/product.js";
import User from "../models/user.js";
import { config } from "dotenv";
import Stripe from "stripe";
import * as express from "express";
import order from "../models/order.js";

config();
const stripe = Stripe(process.env.STRIPE_KEY);
const router = Router();

router.post("/create-checkout-session", async (req, res) => {
  const productIDs = req.body.cart.map((item) => item.id);
  console.log(req.body.cart);
  console.log(productIDs);
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userID,
      cart: JSON.stringify(productIDs),
    },
  });

  const line_items = req.body.cart.map((item) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "IN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 100,
            currency: "inr",
          },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 10,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    customer: customer.id,
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({ url: session.url });
});

const createOrder = async (customer, data) => {
  console.log("Data:", data);
  console.log("================================================");
  console.log(customer.metadata);
  const items = JSON.parse(customer.metadata.cart);

  const newOrder = new order({
    userID: customer.metadata.userId,
    customerID: data.customer,
    paymentIntentId: data.payment_intent,
    products: items,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    delivery_status: "pending",
    payment_status: data.payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order: ", savedOrder);
  } catch (error) {
    console.log(error);
  }
};

let endpointSecret;
// endpointSecret = "whsec_7c69998b33ea7d92f4a75a4f5edaca203215e880dd00042f07fc3356fbf710fd";

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;
    let data, eventType;

    if (endpointSecret) {
      try {
        const reqbody = JSON.stringify(req.body);
        event = stripe.webhooks.constructEvent(reqbody, sig, endpointSecret);
        console.log("webhook verified");
      } catch (err) {
        console.log("webhook failed" + err);
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object;
      eventType = event.type;
    } else {
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          // console.log(customer);
          // console.log("data: ", data);
          createOrder(customer, data);
        })
        .catch((err) => console.error(err));
    }
    // Return a 200 res to acknowledge receipt of the event
    res.send().end();
  }
);

export default router;
