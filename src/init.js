import "@babel/polyfill";
import app from "./app";
import "./db";
import dotenv from "dotenv"
dotenv.config();
import "./models/video";
import "./models/user";
import "./models/comment";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);