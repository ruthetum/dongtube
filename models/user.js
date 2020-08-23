import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number
});

const model = mongoose.model("User", userSchema);
export default model;