import { Router } from "express";
import { getCharacters } from "../controllers/characters";

const router = Router();

router.get("/:sortParam/:filterParam", async (req, res) => {
  try {
    let { sortParam, filterParam } = req.params;
    const data = await getCharacters(sortParam, filterParam);

    if (data.length === 0) {
      return res.status(204).json({ data });
    }

    res
      .status(200)
      .json({ message: "All characters retrieved successfully", ...data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;