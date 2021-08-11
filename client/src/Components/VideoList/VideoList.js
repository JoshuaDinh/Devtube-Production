import React, { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./videoList.css";

const VideoList = ({ videos, setVideoId }) => {
  return (
    <div className="video-list">
      {videos?.map((data) => {
        return (
          <VideoCard
            title={data.snippet.title}
            thumbnail={data.snippet.thumbnails.medium.url}
            setVideoId={setVideoId}
            videoId={data.id.videoId}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
