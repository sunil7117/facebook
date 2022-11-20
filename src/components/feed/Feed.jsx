import {
  ArrowCircleDown,
  ExpandCircleDown,
  MoreHoriz,
  ThumbUp,
  ThumbUpOffAltOutlined,
} from "@mui/icons-material";
import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../utils/post.js";
import { user } from "../../utils/post";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="storys"></div>
        <Share />
        <div className="post">
          {Posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
