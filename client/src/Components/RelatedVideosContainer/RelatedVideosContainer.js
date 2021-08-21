import React, { useEffect, useState } from "react";
import "./relatedVideosContainer.css";
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard";
import requests from "../../requests";
import axiosConfig from "../../axiosConfig";

const RelatedVideosContainer = ({ setVideoId, videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosConfig.get(
          `${requests.fetchRelatedVideos}/${videoId}`
        );
        setRelatedVideos(response.data);
      } catch (err) {
        alert(err);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <div className="related-videos-container">
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

export default RelatedVideosContainer;
