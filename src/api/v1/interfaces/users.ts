import mongoose from "mongoose";

interface Users {
  id: mongoose.Schema.Types.ObjectId;
  email: string;
  password?: string;
}

export { Users };
