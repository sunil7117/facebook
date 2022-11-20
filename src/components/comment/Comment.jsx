import { EmojiEmotions } from "@mui/icons-material";
import React from "react";
import "./comment.css";
const Comment = ({ placeholder }) => {
  return (
    <div className="commentWrapper">
      <img src="/assets/profile.jpg" alt="" className="profilePic mr-10" />
      <div className="commentPosts">
        {placeholder ? (
          <input
            className="commentPost"
            placeholder={
              placeholder !== null
                ? placeholder?.name
                : "Write a public comments..."
            }
          />
        ) : (
          <input
            className="commentPost"
            placeholder="Write a public comments..."
          />
        )}
        <EmojiEmotions className="mr-10" />
        <EmojiEmotions className="mr-10" />
      </div>
    </div>
  );
};

export default Comment;
