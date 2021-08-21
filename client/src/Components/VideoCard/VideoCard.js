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
      <img src={thumbnail} alt="#" className="vc-thumbnail" />
      {!homepage ? (
        <div className="vc-info">
          <p className="vc-title ">{title}</p>
        </div>
      ) : (
        ""
      )}
    </Link>
  );
};
export default VideoCard;
