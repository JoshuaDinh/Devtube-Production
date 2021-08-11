const express = require("express");
const router = express.Router();
const Comments = require("../../models/CommentsSchema");

// Get comments by videoId
router.get("/:commentId", (req, res) => {
  const commentId = req.params.commentId;
  try {
    Comments.find({ videoId: commentId }, (err, result) => {
      if (err) throw err;
      else {
        res.status(200).json(result);
      }
    });
  } catch (err) {
    console.error(err);
  }
});

// Post New Comment
router.post("/", async (req, res) => {
  const newComment = new Comments({
    videoId: req.body.commentId,
    comment: req.body.comment,
    authorDisplayName: req.body.name,
    authorProfileImageUrl: req.body.name.charAt(0).toUpperCase(),
  });
  try {
    const postComment = await newComment.save();
    res.status(200).json({ msg: "Comment Submited Succesfully" });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
