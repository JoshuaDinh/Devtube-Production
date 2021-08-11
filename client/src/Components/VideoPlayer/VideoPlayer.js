import React from "react";
import "./videoPlayer.css";

export const VideoPlayer = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  // video id needed for video

  return (
    <>
      <iframe
        className="video-player-iframe"
        title="videoPlayer"
        autoPlay={1}
        src={videoSrc}
      />
    </>
  );
};
