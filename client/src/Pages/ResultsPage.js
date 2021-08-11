import React, { useState, useEffect } from "react";
import "./results.css";
import requests from "../requests";
import axiosConfig from "../axiosConfig";
import Rows from "../Components/Rows/Rows";
import Loading from "../Components/Loading/Loading";

const ResultsPage = ({ setVideoId, loading, setLoading, props }) => {
  const [results, setResults] = useState([]);

  const {
    match: {
      params: { search },
    },
  } = props;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get(
          `${requests.fetchVideosByQuery}${search}`
        );
        setResults(response.data);
      } catch (err) {
        alert(err);
      }
    };
    setLoading(false);
    fetchData();
  }, [search]);

  return (
    <>
      {loading && <Loading />}
      <Rows videos={results} setVideoId={setVideoId} />
    </>
  );
};

export default ResultsPage;
