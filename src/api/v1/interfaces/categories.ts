import mongoose from "mongoose";

interface Categories {
  id: mongoose.Schema.Types.ObjectId;
  categoryName: string;
}

export { Categories };
