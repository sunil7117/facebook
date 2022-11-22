import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../utils/post.js";
const Feed = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [Posts, SetPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`posts/timelines/${currentUser._id}`);
      SetPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [currentUser._id]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="storys"></div>
        <Share />
        <div className="post">
          {Posts.map((post) => (
            <Post key={post._id} data={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
