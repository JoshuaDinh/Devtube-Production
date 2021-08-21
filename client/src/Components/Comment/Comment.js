import React from "react";
import "./comment.css";

const Comment = ({ author, profileImage, text }) => {
  return (
    <div className="comment">
      <div className="comment-author">
        <div className="comment-avatar">
          <h2>{profileImage}</h2>
        </div>
        <h5 className="comment-name">{author}</h5>
      </div>
      <div className="comment-text">{text}</div>
    </div>
  );
};

export default Comment;
