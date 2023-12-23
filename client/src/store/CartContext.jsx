/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext, useEffect } from "react";

// Initial state for the shopping cart
const initialState = {
  cart: [],
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(action.payload);
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        // If the product is not in the cart, add it
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      // console.log(action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update local storage
      return {
        ...state,
        cart: updatedCart,
      };
    }

    case CLEAR_CART:
      return { ...state, cart: [] };

    case UPDATE_QUANTITY:
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

// Create the context
const CartContext = createContext();

// Create the context provider
const CartProvider = ({ children }) => {
  const storedCart = localStorage.getItem("cart");
  const initialCart = storedCart ? JSON.parse(storedCart) : initialState.cart;

  const [state, dispatch] = useReducer(cartReducer, { cart: initialCart });

  // Actions
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the CartContext
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
