import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "DongTube";
    res.locals.routes = routes;
    next();
};