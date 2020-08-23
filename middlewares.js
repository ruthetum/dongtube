import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "DongTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    next();
};

export const uploadVideo = multerVideo.single("videoFile");