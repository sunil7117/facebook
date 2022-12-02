import "./post.css";
import React, { useEffect, useState } from "react";
import { MoreHoriz, ThumbUp } from "@mui/icons-material";
// import { useSelector } from "react-redux";
import { format } from "timeago.js";
import axios from "axios";
import More from "../more/More";
const Post = ({ record }) => {
  // alert(record?.userId);
  // const { currentUser } = useSelector((state) => state.user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const SERVER =
  //   "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;

  const SERVER = process.env.REACT_APP_SERVERAPI;
  const [postUser, setPostUser] = useState();
  useEffect(() => {
    const getPostUser = async () => {
      const res = await axios.get(`${SERVER}users/${record?.userId}`);
      console.log(res.data);
      setPostUser(res.data);
    };
    getPostUser();
  }, [SERVER, record?.userId]);
  const [hideMore, setHideMore] = useState(true);
  const handleEditPost = () => {
    setHideMore(!hideMore);
  };
  return (
    <div className="post ">
      <div className="postContainer">
        <div className="postTop postpadding">
          <div className="postTopLeft">
            <img src={PF + "profile.jpg"} alt="" className="profile" />
            <div className="postTopLeftInfo">
              <div className="userName">{postUser?.firstName}</div>
              <div className="userdatetime">{format(record?.createdAt)}</div>
            </div>
          </div>
          <div className="postTopRight popupSetup">
            <MoreHoriz onClick={handleEditPost} className="hoverIcons" />
            <More hide={hideMore} />
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
