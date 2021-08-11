import React, { useEffect, useState } from "react";
import "./relatedVideos.css";
import RelatedVideoCard from "./RelatedVideoCard";
import requests from "../../requests";
import axiosConfig from "../../axiosConfig";

export const RelatedVideos = ({ setVideoId, videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get(
          `${requests.fetchRelatedVideos}/${videoId}`
        );
        setRelatedVideos(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <div className="related-video">
      <h4>Related Videos:</h4>
      {relatedVideos?.map((data) => {
        return (
          <RelatedVideoCard
            setVideoId={setVideoId}
            videoId={data.videoId.videoId}
            title={data.snippet.title}
            thumbnail={data.snippet.thumbnails.medium.url}
          />
        );
      })}
    </div>
  );
};
