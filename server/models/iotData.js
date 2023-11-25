import { Schema, model } from "mongoose";

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

export default model("Data", dataSchema);
