import React, { useState, useEffect } from "react";
import Rows from "../Components/Rows/Rows";
import HomeIframeBanner from "../Components/IframeBanner/HomeIframeBanner";
import Loading from "../Components/Loading/Loading";
import axios from "axios";
import requests from "../requests";

const HomePage = ({ setVideoId, loading, setLoading }) => {
  const [videos, setVideos] = useState([]);

  const fetchReact = () => {
    return axios.get(`${requests.fetchMixedVideos}/React`);
  };
  const fetchJavascript = () => {
    return axios.get(`${requests.fetchMixedVideos}/Javascript`);
  };
  const fetchNode = () => {
    return axios.get(`${requests.fetchMixedVideos}/Node`);
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        Promise.all([fetchReact(), fetchJavascript(), fetchNode()])
          .then((data) => setVideos(...videos, data))
          .then(() => setLoading(false));
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading && <Loading />}
      <HomeIframeBanner setVideoId={setVideoId} />
      <Rows
        title="React Developer Videos"
        setVideoId={setVideoId}
        videos={videos[0]?.data}
        link={"/React"}
        homepage
      />
      <Rows
        title="Javascript Developer Videos"
        setVideoId={setVideoId}
        videos={videos[1]?.data}
        link={"/Javascript"}
        homepage
      />
      <Rows
        title="Node Developer Videos"
        setVideoId={setVideoId}
        videos={videos[2]?.data}
        link={"/Node"}
        homepage
      />
    </>
  );
};

export default HomePage;
