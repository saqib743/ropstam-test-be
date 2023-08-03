import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: {
      type: String,
      required: [true, "category Is Required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Categories", categoriesSchema);
