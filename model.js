import mongoose from "mongoose";
import { Schema } from "mongoose";

const usersSchema = new Schema({
  id: Number,
  name: String,
});

const User = mongoose.model("User", usersSchema);

export default User;
