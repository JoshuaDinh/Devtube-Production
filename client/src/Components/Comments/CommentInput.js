import React, { useState, useEffect } from "react";
import FormAlert from "../FormAlert/FormAlert";
import axiosConfig from "../../axiosConfig";
import requests from "../../requests";
import "./comments.css";

const CommentInput = ({ videoId, setFormStatus, formStatus }) => {
  const [displayAlert, setDisplayAlert] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    comment: "",
    commentId: videoId,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayAlert(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [formStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post(requests.postComment, formData);
      setFormStatus(response);
      setDisplayAlert(true);
    } catch (err) {
      alert(err);
      setDisplayAlert(true);
    }
  };
  // Update formData by name attributes on input
  const updateFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const clearData = (e) => {
    e.preventDefault();
  };

  return (
    <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
      {displayAlert && <FormAlert formStatus={formStatus.data.msg} />}
      <div className="comment-form-header">
        <h3>Add Comment:</h3>{" "}
        <div className="comment-avatar">
          <h2>{formData.name.charAt(0).toUpperCase()}</h2>
        </div>
      </div>
      <div className="comment-input-container">
        <div className="comment-input-wrapper">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="comment-button-wrapper">
          <button className="comment-cancel" onClick={(e) => clearData(e)}>
            Cancel
          </button>
          <input type="submit" className="comment-submit" />
        </div>
      </div>
      <input
        className="comment-input"
        placeholder="Add Comment"
        name="comment"
        value={formData.comment}
        onChange={(e) => updateFormData(e)}
      />
    </form>
  );
};

export default CommentInput;
