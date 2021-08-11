import React from "react";
import "./videoCard.css";
import { Link } from "react-router-dom";
const VideoCard = ({ title, thumbnail, setVideoId, videoId, homepage }) => {
  return (
    <Link
      className="video-card"
      to={`/watch/${videoId}`}
      onClick={() => setVideoId(videoId)}
    >
      <img src={thumbnail} alt="#" className="video-thumbnail" />
      {!homepage ? (
        <div className="card-info">
          <p className="video-card-title ">{title}</p>
        </div>
      ) : (
        ""
      )}
    </Link>
  );
};
export default VideoCard;
