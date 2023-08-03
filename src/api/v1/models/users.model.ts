import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: {
      type: String,
      required: [true, "email Is Required"],
      unique: true,
    },
    password: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
