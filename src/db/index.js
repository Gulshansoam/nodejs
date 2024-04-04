import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(
      `\n MongoDB Connected!! Successfully`
    );
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1); // For a cleaner exit
  }
};

export default connectDB;
