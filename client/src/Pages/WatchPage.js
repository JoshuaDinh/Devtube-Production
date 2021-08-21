import React, { useEffect, useState } from "react";
import { VideoPlayer } from "../Components/VideoPlayer/VideoPlayer";
import RelatedVideosContainer from "../Components/RelatedVideosContainer/RelatedVideosContainer";
import VideoDetails from "../Components/VideoDetails/VideoDetails";
import { Comments } from "../Components/Comments/Comments";
import Loading from "../Components/Loading/Loading";
import requests from "../requests";
import axiosConfig from "../axiosConfig";
import "./watchPage.css";

import { useLocation } from "react-router-dom";

const WatchPage = ({ videoId, setVideoId, loading, setLoading }) => {
  const [videoData, setVideoData] = useState({});
  const [likes, setLikes] = useState();
  const [dislikes, setDislikes] = useState();

  const location = useLocation();
  // Get videoId from url - passed by react router LINK
  const id = window.location.pathname.split("/").splice(2)[0];

  // Handles refresh - set's videoId
  useEffect(() => {
    setVideoId(id);
  }, [location.key, id, setVideoId]);

  // Fetch data by videoId
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get(
          `${requests.fetchVideoById}/${videoId}`
        );
        setVideoData(response.data.snippet);
        setLikes(response.data.likes);
        setDislikes(response.data.dislikes);
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    };
    if (videoId) {
      fetchData();
    }
  }, [videoId, id]);

  return (
    <>
      <div className="watch-page-video-container">
        {loading && <Loading />}
        <VideoPlayer videoId={videoId} />
        <RelatedVideosContainer setVideoId={setVideoId} videoId={videoId} />
      </div>
      <VideoDetails
        videoData={videoData}
        videoId={videoId}
        likes={likes}
        dislikes={dislikes}
        setLikes={setLikes}
        setDislikes={setDislikes}
      />
      <Comments videoId={videoId} setVideoId={setVideoId} />
    </>
  );
};
export default WatchPage;
