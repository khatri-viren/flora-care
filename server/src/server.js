import express from "express";
import { connect, Schema, model } from "mongoose";
import pkg from "body-parser";
const { json, urlencoded } = pkg;
// const cors = require('cors'); // Import the cors package
import cors from "cors";

const app = express();
// Connect to MongoDB
connect(`${process.env.MONGODB_URI}`).then(
  () => {
    console.log("Connnected to Mongoose successfully!");
  },
  (err) => {
    console.log("Error while connecting" + err);
  }
);
app.use(express.json());
app.use(cors());
// app.use(urlencoded({extended: true}));
// app.use(express.static("public"));
// app.set('view engine', 'ejs');

// Create a MongoDB schema and model for your data
const dataSchema = new Schema({
  id: String, // Unique device identifier
  sm1: Number,
  sm2: Number,
  sm3: Number,
  sm4: Number,
  temp: Number,
  hum: Number,
  ALS: Number,
  UVS: Number,
  timestamp: { type: Date, default: Date.now }, // Timestamp for data entry
});

const Data = model("Data", dataSchema);

// Middleware to parse JSON requests
app.use(json());

// Route to receive data from IoT device
app.post("/api/data", async (req, res) => {
  try {
    const { id, sm1, sm2, sm3, sm4, temp, hum, ALS, UVS } = req.body;
    // if(req){
    //   console.log("Logged");
    // }
    console.log(req.body);
    return;

    // Create a new data entry
    const newData = new Data({
      id,
      sm1,
      sm2,
      sm3,
      sm4,
      temp,
      hum,
      ALS,
      UVS,
    });

    // Save the data entry to the database
    await newData.save();

    res.status(201).json({ message: "Data received and stored successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/data/:id", async (req, res) => {
  try {
    const deviceID = req.params.id;

    // Find all data entries with the given device ID
    const data = await Data.find({ id: deviceID }).sort({ timestamp: 1 });
    // console.log(data);

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(process.env.PORT || 4001, () => {
  console.log(`Server is running on port 4000`);
});
