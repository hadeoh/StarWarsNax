import { Router } from "express";
import { getComment, postComments } from "../controllers/comments";

const router = Router();

router.get("/:episodeId", async (req, res) => {
  try {
    const data = await getComment(req.params.episodeId);

    if (data.length === 0) {
      return res.status(204).json({ data });
    }

    res
      .status(200)
      .json({ message: "All comments retrieved successfully", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
    try {
        let {episodeId, body, ipAddress} = req.body;
      const data = await postComments(episodeId,body,ipAddress);
  
      if (data === 'comment error') {
        return res.status(400).json({ message: 'The length of comments cannot be more than 500', data: null });
      }
  
      res
        .status(200)
        .json({ message: "Comment posted successfully", data });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;