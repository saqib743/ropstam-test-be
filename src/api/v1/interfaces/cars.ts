import mongoose from "mongoose";

interface Cars {
  id: mongoose.Schema.Types.ObjectId;
  categoryId: string;
  carName: string;
}

export { Cars };
