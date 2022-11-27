import "./share.css";
import React from "react";
import { EmojiEmotions, PhotoAlbum, VideoCall } from "@mui/icons-material";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleModel = () => {
    alert("hello");
  };
  return (
    <div className="share">
      <div className="shareContainer postpadding">
        <div className="shareTop">
          <img src={PF + "profile.jpg"} alt="" className="profile" />
          <button onClick={handleModel}>What's on in your mind, sunil?</button>
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOption">
            <VideoCall className="shareIcon" style={{ color: "#E42645" }} />
            <span>Live Video</span>
          </div>
          <div className="shareOption">
            <PhotoAlbum className="shareIcon" style={{ color: "#45BD62" }} />
            <span>Photo / video</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions className="shareIcon" style={{ color: "#EAB026" }} />
            <span>Feelings / activity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
