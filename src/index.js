// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

const Port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error Occurred ", err);
    });
    app.listen(Port, () => {
      console.log("Server started on Port", Port);
    });
  })
  .catch((error) => {
    console.log("Not connected to DB", error);
  });

// ---------------->First Approach<-------------------//
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");
    app.on("error", (error) => {
      console.log("Error:-", error);
    });
    app.listen(process.env.PORT || 5100, () => {
      console.log("Server is running on port: " + process.env.PORT || 5100);
    });
  } catch (error) {
    console.log("Some Error Occurred while connecting to MongoDB:", error);
    throw Error(error);
  }
})();
*/
