const express = require("express");
const router = express.Router();
const videos = require("../../models/VideoSchema");

// PUT update likes by videoId
router.put("/likes/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  const { status } = req.body;
  try {
    if (status === "increment") {
      const incrementLikes = await videos.findOneAndUpdate(
        { "videoId.videoId": videoId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      res.status(200).json(incrementLikes);
    } else if (status === "decrement") {
      const decrementLikes = await videos.findOneAndUpdate(
        { "videoId.videoId": videoId },
        { $inc: { likes: -1 } },
        { new: true }
      );
      res.status(200).json(decrementLikes);
    }
  } catch (err) {
    throw err;
  }
});
// PUT update dislikes by videoId
router.put("/dislikes/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  const { status } = req.body;
  try {
    if (status === "increment") {
      const incrementDislikes = await videos.findOneAndUpdate(
        { "videoId.videoId": videoId },
        { $inc: { dislikes: 1 } },
        { new: true }
      );
      res.status(200).json(incrementDislikes);
    } else if (status === "decrement") {
      const decrementDislikes = await videos.findOneAndUpdate(
        { "videoId.videoId": videoId },
        { $inc: { dislikes: -1 } },
        { new: true }
      );
      res.status(200).json(decrementDislikes);
    }
  } catch (err) {
    throw err;
  }
});

module.exports = router;
