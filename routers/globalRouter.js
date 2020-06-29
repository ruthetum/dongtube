import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.send("index"));
globalRouter.get("/join", (req, res) => res.send("join"));

export default globalRouter;