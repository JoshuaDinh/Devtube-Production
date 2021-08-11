import React from "react";
import "./iframeBanner.css";

const IframeBanner = ({ videos }) => {
  // Gets first video from api call to display in iframe  console.log(videos);
  console.log(videos);

  const videoSrc = `https://www.youtube.com/embed/${videos[0]?.videoId.videoId}`;
  return (
    <div className="iframe-banner">
      <div className="iframe-banner-main-video">
        <iframe
          title="videoPlayer"
          autoPlay={1}
          src={videoSrc}
          className="iframe-banner-main-thumbnail"
        ></iframe>
      </div>
    </div>
  );
};

export default IframeBanner;
