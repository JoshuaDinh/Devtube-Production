import React, { useState, useEffect } from "react";
import "./comments.css";
import axiosConfig from "../../axiosConfig";
import requests from "../../requests";
import CommentInput from "./CommentInput";
import Comment from "./Comment";

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
    fetchData();
  }, [formStatus, videoId]);

  return (
    <div className="comments">
      <CommentInput
        videoId={videoId}
        setFormStatus={setFormStatus}
        formStatus={formStatus}
      />

      <h3 className="comments-header">Comments: {comments.length}</h3>
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
  );
};
