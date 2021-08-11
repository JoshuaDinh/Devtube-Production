import React, { useState } from "react";
import "./videoDetails.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { format } from "timeago.js";
import axiosConfig from "../../axiosConfig";
import requests from "../../requests";

const VideoDetails = ({
  videoData,
  videoId,
  likes,
  dislikes,
  setLikes,
  setDislikes,
}) => {
  const [animateLike, setAnimateLike] = useState(false);
  const [animateDislike, setAnimateDislike] = useState(false);

  const handleLikes = async () => {
    const body = { increment: "likes" };
    setAnimateLike(true);
    await axiosConfig.put(`${requests.updateVideoDetails}/${videoId}`, body);
    setLikes(likes + 1);
  };

  const handleDislikes = async () => {
    const body = { increment: "dislikes" };
    setAnimateDislike(true);
    await axiosConfig.put(`${requests.updateVideoDetails}/${videoId}`, body);
    setDislikes(dislikes + 1);
  };

  return (
    <div className="video-details">
      <div className="video-details-account">
        <h2> {videoData.title}</h2>
        <span className="video-details-description">
          {videoData.description}
        </span>
        <span className="video-details-date">
          uploaded-{format(videoData.publishedAt)}
        </span>
      </div>
      <div className="video-details-icon-container">
        <ThumbUpIcon
          className={`video-details-icon ${
            animateLike && "video-details-animate-like"
          }`}
          onClick={handleLikes}
        />
        <span> {likes}</span>
        <ThumbDownIcon
          className={`video-details-icon ${
            animateDislike && "video-details-animate-dislike"
          }`}
          onClick={handleDislikes}
        />
        <span>{dislikes}</span>
      </div>
    </div>
  );
};
export default VideoDetails;
