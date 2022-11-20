import { MoreHoriz, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Comment from "../comment/Comment";
import "./post.css";
import { useSelector } from "react-redux";
const Post = ({ data }) => {
  const [publicPost, setPublicPost] = useState(false);
  const handlePublicpost = () => {
    setPublicPost(true);
  };
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="postWrapper bw">
      <div className="postTop p-20">
        <div className="userDetails">
          <img
            src="/assets/profile.jpg"
            alt=""
            className="sidebarProfile mr-10"
          />
          <div className="userInfo">
            <div className="nameDate lh-1">
              <div className="fs-16 fw-600 userName ">
                {currentUser.userName}
              </div>
              <div className="fs-12 ">5D ago</div>
            </div>
            <div>
              <MoreHoriz />
            </div>
          </div>
        </div>
      </div>
      <div className="postCenter">
        <p className="userPostComment p-20">here is new posts</p>
        <img src="/assets/profile.jpg" alt="" className="userPostImg" />
      </div>
      <div className="postBottom p-20">
        <div className="postBottomTop">
          <div className="bottomTopLike">
            <ThumbUp className="mr-10" />
            <span className="lblack">8</span>
          </div>
          <div className="bottomTopLike lblack ">20 Comments</div>
        </div>
        <hr className="hrpost" />
        <div className="postBottomCenter">
          <div className="bottomCenterOption lblack">
            <ThumbUpOutlined className="mr-10" />
            <span className="fw-600">Like</span>
          </div>
          <div className="bottomCenterOption lblack">
            <ThumbUpOutlined className="mr-10" />
            <span className="fw-600">Comments</span>
          </div>
          <div className="bottomCenterOption lblack">
            <ThumbUpOutlined className="mr-10" />
            <span className="fw-600">Share</span>
          </div>
        </div>
        <hr className="hrpost" />
        <div className="postBottomBottm">
          <div className="bottomShare">
            <Comment />
          </div>
          <div className="bottomComment">
            <img
              src="/assets/profile.jpg"
              alt=""
              className="profilePic mr-10"
            />
            <div className="showComments  mr-10">
              <div className="showComment p-10">
                <div className="fs-16 fw-600">Sunil kumar</div>
                <p className="userPostComment">this is a new post 2</p>
              </div>
              <div className="commentOption lblack fw-600">
                <span className="Like mr-10">Like</span>
                <span className="Reply mr-10" onClick={handlePublicpost}>
                  Comment
                </span>
                <span className="shares mr-10">Share</span>
                <span className="date">12h</span>
              </div>
            </div>
            <div className="moreHide">
              <MoreHoriz />
            </div>
          </div>
          {publicPost && <Comment placeholder={{ name: "raj" }} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
