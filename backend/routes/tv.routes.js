import express from "express";
const router = express.Router();
import {
  getTrendingTv,
  getSimilarTvs,
  geteTvDetails,
  getTvsByCategory,
  getTvTrailers,
} from "../conrollers/tv.controller.js";
router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", geteTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);
export default router;
