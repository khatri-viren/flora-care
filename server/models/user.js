import { Schema, model } from "mongoose";
const user = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});

export default model("User", user);
