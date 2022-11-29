import "./post.css";
import React from "react";
import { MoreHoriz, ThumbUp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
const Post = ({ record }) => {
  const { currentUser } = useSelector((state) => state.user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post ">
      <div className="postContainer">
        <div className="postTop postpadding">
          <div className="postTopLeft">
            <img src={PF + "profile.jpg"} alt="" className="profile" />
            <div className="postTopLeftInfo">
              <div className="userName">{currentUser.firstName}</div>
              <div className="userdatetime">{format(record?.createdAt)}</div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreHoriz />
          </div>
        </div>
        <div className="postCenter">
          <div className="postCenterTop postpadding">{record?.desc}</div>
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
