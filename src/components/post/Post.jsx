import "./post.css";
import React from "react";
import { MoreHoriz, ThumbUp } from "@mui/icons-material";

const Post = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post ">
      <div className="postContainer">
        <div className="postTop postpadding">
          <div className="postTopLeft">
            <img src={PF + "profile.jpg"} alt="" className="profile" />
            <div className="postTopLeftInfo">
              <div className="userName">Sunil kumar</div>
              <div className="userdatetime">date Time</div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="postCenter">
          <div className="postCenterTop postpadding">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            quidem omnis ullam maxime debitis asperiores nemo aliquid architecto
            facere fugiat?
          </div>
          <div className="postCenterBottom">
            <img src={PF + "profile.jpg"} alt="" className="postImg" />
          </div>
        </div>
        <div className="postBottom postpadding">
          <div className="postBottomTop">
            <span>
              <ThumbUp />
            </span>
            <span>9 comments</span>
          </div>
          <hr />
          <div className="postBottomCenter">
            <div className="pbcoption">
              <ThumbUp className="pbcIcon" />
              <span>Like</span>
            </div>
            <div className="pbcoption">
              <ThumbUp className="pbcIcon" />

              <span>Like</span>
            </div>
            <div className="pbcoption">
              <ThumbUp className="pbcIcon" />

              <span>Like</span>
            </div>
          </div>
          <hr />
          <div className="postBottomBottom">share component</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
