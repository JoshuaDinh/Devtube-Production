import React from "react";
import "./relatedVideos.css";
import { Link } from "react-router-dom";

const RelatedVideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <Link
      to={`/watch/${videoId}`}
      onClick={() => setVideoId(videoId)}
      className="related-video-card"
    >
      <img
        className="related-video-card-img"
        src={thumbnail}
        alt="thumbnail unavailable"
      />
      <p className="related-video-card-title">{title}</p>
    </Link>
  );
};
export default RelatedVideoCard;
