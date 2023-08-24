import React from "react";
import "../App.css";

const PostCard = (props) => {
  const { title, summary, image, date, User } = props;
  return (
    <>
      <div className="post">
        <div className="postImg">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <p>{date}</p>
          <h2>{title}</h2>
          <p>Author : {User.username}</p>
          <p>{summary}</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
