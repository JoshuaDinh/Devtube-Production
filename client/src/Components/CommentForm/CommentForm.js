import React, { useState, useEffect } from "react";
import FormAlert from "../FormAlert/FormAlert";
import axiosConfig from "../../axiosConfig";
import requests from "../../requests";
import "./commentForm.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

const CommentInput = ({ videoId, setFormStatus, formStatus }) => {
  const [displayAlert, setDisplayAlert] = useState(false);

  useEffect(() => {
    setFormData({
      ...formData,
      name: "",
      avatar: "",
      comment: "",
      commentId: videoId,
    });
  }, [videoId]);

  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    comment: "",
    commentId: videoId,
  });

  const { name, avatar, comment } = formData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayAlert(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [formStatus, videoId]);

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
    setFormData({
      ...formData,
      name: "",
      avatar: "",
      comment: "",
      commentId: videoId,
    });
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      {displayAlert && <FormAlert formStatus={formStatus.data.msg} />}
      <div className="form-header">
        <h3>Add Comment:</h3>{" "}
        <div className="form-avatar">
          <h2>{formData.name.charAt(0).toUpperCase()}</h2>
        </div>
      </div>

      <div className="form-input-container">
        <Input
          placeholder="Name"
          value={name}
          updateFormData={updateFormData}
          name={"name"}
          type="text"
        />
        <Button name="Cancle" handleClick={clearData} type="cancle" />
        <Button name="Submit" handleClick={handleSubmit} type="submit" />
      </div>
      <Input
        placeholder="Add Comment"
        value={comment}
        updateFormData={updateFormData}
        name={"comment"}
        type="text"
      />
    </form>
  );
};

export default CommentInput;
