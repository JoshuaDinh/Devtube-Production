import React, { useState, useEffect } from "react";
import Rows from "../Components/Rows/Rows";
import IframeBanner from "../Components/IframeBanner/IframeBanner";
import Loading from "../Components/Loading/Loading";
import axios from "axios";
const VideoPage = ({ setVideoId, endPoint, title, loading, setLoading }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const videoData = await axios.get(endPoint);
        setVideos(videoData.data);
      } catch (err) {
        alert(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [endPoint]);
  return (
    <>
      {loading && <Loading />}
      <IframeBanner videos={videos} />
      <Rows
        title={title}
        setVideoId={setVideoId}
        videos={videos}
        link={endPoint}
      />
    </>
  );
};

export default VideoPage;
