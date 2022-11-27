import Post from "../post/Post";
import Rightbar from "../rightbar/Rightbar";
import Share from "../share/Share";
import Sidebar from "../sidebar/Sidebar";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <Sidebar />
      <div className="feedContainers">
        <div className="feedContainer">
          <Share />
          <Post />
        </div>
      </div>
      <Rightbar />
    </div>
  );
};

export default Feed;
