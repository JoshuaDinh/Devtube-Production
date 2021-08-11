import React, { useState, useEffect } from "react";
import "./iframeBanner.css";
import VideoCard from "../VideoCard/VideoCard";
import requests from "../../requests";
import axios from "axios";

const HomeIframeBanner = ({ setVideoId }) => {
  const [randomVideos, setRandomVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.allVideos);
        const random = [];
        random.push(response.data.sort(() => Math.random() - 0.5));
        setRandomVideos(random);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);

  // Gets first video from api call to display in iframe
  const videoSrc = `https://www.youtube.com/embed/${randomVideos[0]?.[0]?.videoId.videoId}`;
  return (
    <div className="home-iframe-banner">
      <div className="home-iframe-banner-main-video">
        <iframe
          title="videoPlayer"
          autoPlay={1}
          src={videoSrc}
          className="iframe-banner-main-thumbnail"
        ></iframe>
      </div>
      <div className="home-iframe-grid">
        {randomVideos[0]?.slice(1, 4).map((data) => {
          return (
            <VideoCard
              homepage
              setVideoId={setVideoId}
              videoId={data.videoId.videoId}
              title={data.snippet?.title}
              thumbnail={data.snippet?.thumbnails?.medium.url}
              channel={data.snippet?.channelTitle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeIframeBanner;
