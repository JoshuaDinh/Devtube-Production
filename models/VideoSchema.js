const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  topic: { type: String },
  comments: {
    author: { type: String },
    text: { type: String },
    avatar: { data: Buffer, contentType: String },
    date: { type: Date },
  },
  likes: { type: Number },
  dislikes: { type: Number },
  kind: { type: String },
  etag: { type: String },
  videoId: {
    kind: { type: String },
    videoId: { type: String },
  },
  snippet: {
    publishedAt: { type: String },
    channelId: { type: String },
    title: { type: String },
    description: { type: String },
    thumbnails: {
      default: {
        url: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
      medium: {
        url: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
      high: {
        url: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
    },
    channelTitle: { type: String },
    liveBroadcastContent: { type: String },
    publishTime: { type: String },
  },
});

module.exports = mongoose.model("videoSchema", VideoSchema);
