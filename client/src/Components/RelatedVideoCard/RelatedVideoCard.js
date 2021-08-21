import React from "react";
import "./relatedVideoCard.css";
import { Link } from "react-router-dom";

const RelatedVideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <Link
      to={`/watch/${videoId}`}
      onClick={() => setVideoId(videoId)}
      className="rv-card"
    >
      <img
        className="rv-card-img"
        src={thumbnail}
        alt="thumbnail unavailable"
      />
      <p className="rv-card-title">{title}</p>
    </Link>
  );
};
export default RelatedVideoCard;
