import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv()

const connectionString = process.env.MONGODB

export const connectDB = async () => {
    try {
        await mongoose.connect(connectionString)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
    }

}

