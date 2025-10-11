import express from "express";
import {
  getTrendingMovie,
  getMovieTrailers,
  getMoviesByCategory,
  getSimilarMovies,
  geteMovieDetails,
} from "../conrollers/movie.controller.js";
const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", geteMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);
export default router;
