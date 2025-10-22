
import mongoose, { Schema, model } from "mongoose";

const userSchemas = new Schema({
    username: { type: String, requered: true },
    lastname: { type: String, requered: true},
    phonenumber: { type: Number, requered: true },
    age: {type: Number, requered: true },
    gender: {type: String, requered: true }
})

export const User = mongoose.model("User", userSchemas)