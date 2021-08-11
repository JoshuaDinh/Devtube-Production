const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
  videoId: { type: String },
  comment: { type: String },
  authorDisplayName: { type: String },
  authorProfileImageUrl: { type: String },
  publishedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comments", CommentsSchema);
// const mongoose = require("mongoose");

// const CommentsSchema = new mongoose.Schema({
//   snippet: {
//     videoId: { type: String },
//     textOriginal: { type: String },
//     authorDisplayName: { type: String },
//     authorProfileImageUrl: { type: String },
//     authorChannelUrl: { type: String },
//     authorChannelId: {
//       value: { type: String },
//     },

//     likeCount: { type: Number },
//     publishedAt: { type: Date },
//   },
// });

// module.exports = mongoose.model("comments", CommentsSchema);
