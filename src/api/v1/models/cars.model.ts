import mongoose from "mongoose";

const carsSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    carName: {
      type: String,
      required: [true, "email Is Required"],
      unique: true,
    },
    categoryId: {
      type: String,
      required: [true, "category Field Is Required"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cars", carsSchema);
