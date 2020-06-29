import express from "express";

const videoRouter = express.Router();

videoRouter.get("/", (req, res) => res.send("video index"));
videoRouter.get("/edit", (req, res) => res.send("video edit"));

export default videoRouter;