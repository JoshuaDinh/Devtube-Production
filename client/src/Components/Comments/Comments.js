import React, { useState, useEffect } from "react";
import "./comments.css";
import axiosConfig from "../../axiosConfig";
import requests from "../../requests";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

export const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [formStatus, setFormStatus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosConfig.get(
        `${requests.fetchCommentsById}/${videoId}`
      );
      setComments(response.data);
    };
    if (videoId) {
      fetchData();
    }
  }, [formStatus, videoId]);

  return (
    <div className="comments">
      <CommentForm
        videoId={videoId}
        setFormStatus={setFormStatus}
        formStatus={formStatus}
      />
      <h3 className="comments-header">Comments: {comments.length}</h3>
      <div className="comments-container">
        {comments?.map((comment) => {
          return (
            <Comment
              author={comment.authorDisplayName}
              profileImage={comment.authorProfileImageUrl}
              text={comment.comment}
            />
          );
        })}
      </div>
    </div>
  );
};
