import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log('mongoDB connected.');
    } catch (error) {
        console.log(error);
    }
}

const app = express();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});