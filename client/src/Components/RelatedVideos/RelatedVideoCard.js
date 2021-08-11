import React from "react";
import "./relatedVideos.css";

const RelatedVideoCard = ({ title, thumbnail, setVideoId, videoId }) => {
  return (
    <div onClick={() => setVideoId(videoId)} className="related-video-card">
      <img
        className="related-video-card-img"
        src={thumbnail}
        alt="thumbnail unavailable"
      />
      <p className="related-video-card-title">{title}</p>
    </div>
  );
};
export default RelatedVideoCard;
