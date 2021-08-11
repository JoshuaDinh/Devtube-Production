const express = require("express");
const router = express.Router();
const videos = require("../../models/VideoSchema");

// Get all videos by topic/subject
router.get("/byTopic/:subject", async (req, res) => {
  let subject = req.params.subject;
  try {
    const videosByTopic = await videos.find({ topic: subject });
    res.status(200).json(videosByTopic);
  } catch (err) {
    throw err;
  }
});

// Get 5 random videos by topic/subject (displayed on homepage)
router.get("/byTopic/mix/:subject", async (req, res) => {
  let subject = req.params.subject;
  try {
    const videosByTopic = await videos.findOne({ topic: subject });
    const randomVideos = await videos.aggregate([
      { $match: { topic: videosByTopic.topic } }, // Filter the results by Subject
      { $sample: { size: 4 } }, // Retrieves 5 documents
    ]);
    res.status(200).json(randomVideos);
  } catch (err) {
    throw err;
  }
});

// GET all videos from db
router.get("/allVideos", async (req, res) => {
  try {
    const allVideos = await videos.find({});
    res.status(200).json(allVideos);
  } catch (err) {
    throw err;
  }
});

// Get videos based on search
router.get("/search_query=:search", async (req, res) => {
  const search = req.params.search;
  try {
    const searchResults = await videos.find({
      "snippet.title": { $regex: `${search}`, $options: "?i" },
    });
    res.status(200).json(searchResults);
  } catch (err) {
    throw err;
  }
});

// GET video by videoId
router.get("/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  try {
    const dataById = await videos.findOne({ "videoId.videoId": videoId });
    res.status(200).json(dataById);
  } catch (err) {
    throw err;
  }
});

// GET 5 random videos related to topic
router.get("/relatedVideos/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  try {
    // Find video data - extract video topic - search for related videos by topic
    const dataById = await videos.findOne({ "videoId.videoId": videoId });
    const randomVideos = await videos.aggregate([
      { $match: { topic: dataById.topic } }, // Filter the results by Subject
      { $sample: { size: 5 } }, // Retrieves 5 documents
    ]);
    res.status(200).json(randomVideos);
  } catch (err) {
    throw err;
  }
});

// PUT update likes/dislikes by videoId
router.put("/:videoId", async (req, res) => {
  const videoId = req.params.videoId;
  const { increment } = req.body;
  try {
    if (increment === "likes") {
      const incrementLikes = await videos.findOneAndUpdate(
        { "videoId.videoId": videoId },
        { $inc: { likes: 1 } },
        { new: true }
      );
      res.status(200).json(incrementLikes);
    } else if (increment === "dislikes") {
      const incrementDislikes = await videos.findOneAndUpdate(
        { "videoId.videoId": videoId },
        { $inc: { dislikes: 1 } },
        { new: true }
      );
      res.status(200).json(incrementDislikes);
    }
  } catch (err) {
    throw err;
  }
});

module.exports = router;
