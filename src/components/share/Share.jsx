import "./share.css";
import React, { useRef, useState } from "react";
import {
  EmojiEmotions,
  EmojiEmotionsOutlined,
  Flag,
  Gradient,
  LocationOn,
  MoreHoriz,
  PhotoAlbum,
  Sell,
  VideoCall,
} from "@mui/icons-material";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

const Share = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const SERVER =
  // "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;
  const SERVER = process.env.REACT_APP_SERVERAPI;
  console.log(SERVER);
  // Open Model for share
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShareShow = () => {
    setDisabe(true);
    setShow(true);
  };
  // Open Model for share
  const [disable, setDisabe] = useState(true);
  const uploadPost = useRef();
  let data;
  const showpostValue = () => {
    if (uploadPost.current.value.length > 0) {
      data = uploadPost.current.value;
      setDisabe(false);
    } else {
      setDisabe(true);
    }
  };
  const handlePost = async () => {
    const post = {
      userId: currentUser._id,
      post: data,
    };
    console.log(post);
    setShow(false);
    try {
      const res = await axios.post(`${PF}post/`, { post });
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <div className="share">
      <div className="shareContainer postpadding">
        <div className="shareTop">
          <img src={PF + "profile.jpg"} alt="" className="profile" />
          <button onClick={handleShareShow}>
            What's on in your mind, sunil?
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title bsPrefix="modelHeading">
                <h3>Create Post</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modelUserInfo">
                <img src={PF + "profile.jpg"} alt="" className="profile" />
                <div className="userInfo">
                  <div className="userName">sunil</div>
                  <div className="userName"></div>
                </div>
              </div>
              <div className="modelUserInfo">
                <textarea
                  rows="4"
                  ref={uploadPost}
                  placeholder="What on your mind, sunil?"
                  onChange={showpostValue}
                ></textarea>
              </div>
              <div className="modelUserInfo">
                <div className="userTags">
                  <div className="icon">
                    <Gradient />
                  </div>
                  <div>
                    <EmojiEmotionsOutlined
                      className="icon"
                      htmlColor="#696b6f"
                    />
                  </div>
                </div>
              </div>
              <div className="modelUserInfo">
                <div className="userTags border">
                  <div className="addPosts icon">Add to your post</div>
                  <div className="posts">
                    <span>
                      <PhotoAlbum className="icon" htmlColor="green" />
                    </span>
                    <span>
                      <Sell className="icon" htmlColor="blue" />
                    </span>
                    <span>
                      <EmojiEmotionsOutlined
                        className="icon"
                        htmlColor="tomato"
                      />
                    </span>
                    <span>
                      <LocationOn className="icon" htmlColor="red" />
                    </span>
                    <span>
                      <Flag className="icon" htmlColor="lightblue" />
                    </span>
                    <span>
                      <MoreHoriz />
                    </span>
                  </div>
                </div>
              </div>
              <Button
                className={disable === true ? "w-100 no" : "w-100"}
                variant={disable ? "secondary" : "primary"}
                onClick={handlePost}
                disabled={disable === true ? true : false}
              >
                Post
              </Button>
            </Modal.Body>
          </Modal>
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareOption">
            <VideoCall className="shareIcon" style={{ color: "#E42645" }} />
            <span>Live Video</span>
          </div>
          <div className="shareOption" onClick={handleShareShow}>
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
