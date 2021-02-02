import { Router } from "express";
import { getMovies } from "../controllers/movies";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const data = await getMovies();

    if (data.length === 0) {
      return res.status(204).json({ data });
    }

    res
      .status(200)
      .json({ message: "All movies retrieved successfully", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;