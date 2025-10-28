import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import searchRoutes from "./routes/search.routes.js";
import tvRoutes from "./routes/tv.routes.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middlware/protectRoute.js";

const app = express();

const PORT = ENV_VARS.PORT;
const __dirname = path.resolve();

<<<<<<< HEAD
app.use(express.json());
=======
app.use(express.json()); // will allow us to parse req.body
>>>>>>> 47093cb8eff1cd4319d13a3d04bebc4d2a6c8baf
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

if (ENV_VARS.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

<<<<<<< HEAD
app.listen(PORT || 5000, () => {
  console.log(`✅ Server started on port ${PORT}`);
=======
app.listen(5000, () => {
  console.log("Server started at http://localhost:" + PORT);
>>>>>>> 47093cb8eff1cd4319d13a3d04bebc4d2a6c8baf
  connectDB();
});
