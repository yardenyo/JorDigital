import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

let isConnected: boolean = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

const disconnectFromDB = async () => {
  if (!isConnected) {
    console.log("MongoDB is already disconnected");
    return;
  }

  try {
    await mongoose.disconnect();

    isConnected = false;
    console.log("MongoDB is disconnected");
  } catch (error) {
    console.log("Error disconnecting from MongoDB", error);
  }
};

const db = { connect: connectToDB, disconnect: disconnectFromDB };

export default db;
