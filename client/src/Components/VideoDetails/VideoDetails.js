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
  const [likeStatus, setLikeStatus] = useState(true);
  const [dislikeStatus, setDislikeStatus] = useState(true);

  // Determines if like button has been pressed - allowing only one vote per person/render
  const handleLikes = async () => {
    setLikeStatus(!likeStatus);
    if (likeStatus === true) {
      await axiosConfig.put(`${requests.updateLikes}/${videoId}`, {
        status: "increment",
      });
      setLikes(likes + 1);
    } else if (likeStatus == false) {
      await axiosConfig.put(`${requests.updateLikes}/${videoId}`, {
        status: "decrement",
      });
      setLikes(likes - 1);
      setLikeStatus(!likeStatus);
    }
  };

  // Determines if dislike button has been pressed - allowing only one vote per person/render

  const handleDislikes = async () => {
    setDislikeStatus(!likeStatus);
    if (dislikeStatus === true) {
      await axiosConfig.put(`${requests.updateDislikes}/${videoId}`, {
        status: "increment",
      });
      setDislikes(dislikes + 1);
    } else if (dislikeStatus == false) {
      await axiosConfig.put(`${requests.updateDislikes}/${videoId}`, {
        status: "decrement",
      });
      setDislikes(dislikes - 1);
      setDislikeStatus(!dislikeStatus);
    }
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
        <ThumbUpIcon className="video-details-icon" onClick={handleLikes} />
        <span> {likes}</span>
        <ThumbDownIcon
          className="video-details-icon"
          onClick={handleDislikes}
        />
        <span>{dislikes}</span>
      </div>
    </div>
  );
};
export default VideoDetails;
