import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import searchRoutes from "./routes/search.routes.js";
import tvRoutes from "./routes/tv.routes.js";
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middlware/protectRoute.js";
const app = express();

app.use(express.json()); // will allow us to parse req.body
app.use(cookieParser());
const PORT = ENV_VARS.PORT;
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);
app.listen(5000, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
