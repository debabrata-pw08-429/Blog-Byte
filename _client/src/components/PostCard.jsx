import React from "react";
import "../App.css";
import { dateFormator } from "../utils/dateFormator";

const PostCard = (props) => {
  const { title, summary, image, date, User } = props;
  let formattedDate = dateFormator(date);
  return (
    <>
      <div className="post">
        <div className="postImg">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <p>{formattedDate}</p>
          <h2>{title}</h2>
          <p>Author : {User.username}</p>
          <p>{summary}</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
