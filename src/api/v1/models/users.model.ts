import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: [true, "email Is Required"],
      unique: true,
    },
    password: { type: String, required: [true, "password Field Is Required"] },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
