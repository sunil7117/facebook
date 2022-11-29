import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import Rightbar from "../rightbar/Rightbar";
import Share from "../share/Share";
import Sidebar from "../sidebar/Sidebar";
import "./feed.scss";

const Feed = () => {
  const { currentUser } = useSelector((state) => state.user);
  const SERVER =
    // "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;
  const SERVER = process.env.REACT_APP_SERVERAPI;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPots = async () => {
      try {
        const res = await axios.get(
          `${SERVER}posts/profile/${currentUser._id}`
        );
        setPosts(
          res.data.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (err) {
        console.log(err);
      }
    };
    getPots();
  }, [SERVER, currentUser._id]);

  return (
    <div className="feed">
      <Sidebar />
      <div className="feedContainers">
        <div className="feedContainer">
          <Share />
          {posts.map((post) => {
            console.log(post);
            return <Post key={post._id} record={post} />;
          })}
          <Post />
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Feed;
