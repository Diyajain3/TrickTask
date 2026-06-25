import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // Fail fast after 5 seconds
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
};

export default connectDB;