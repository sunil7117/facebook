import {
  EmojiEmotions,
  PermMedia,
  VideocamOffOutlined,
} from "@mui/icons-material";
import "./share.css";
import React, { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import axios from "axios";

const Share = () => {
  const { currentUser } = useSelector((state) => state.user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [show, setShow] = useState(false);
  const handleClose = async () => {
    setShow(false);
    const desc = postInput.current.value;
    const postData = {
      userId: currentUser._id,
      desc: desc,
    };
    await axios.post("/posts", postData);
    window.location.reload();
  };
  const handleShow = () => setShow(true);
  const postInput = useRef();

  return (
    <div className="share bw ">
      <div className="shareWrapper p-20">
        <div className="shareTop ">
          <img className="profilePic mr-10" src="/assets/profile.jpg" alt="" />
          <span className="span" onClick={handleShow}>
            <input
              className="shareInput"
              disabled
              placeholder="What's on you mind, Sunil?"
            />
          </span>

          {/* ==================================================== */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="formShare">
                <div className="formSharetop">
                  <div>
                    <img
                      src={PF + "/profile.jpg"}
                      alt=""
                      className="sidebarProfile mr-10"
                    />
                  </div>
                  <div>{currentUser.userName}</div>
                </div>
                <div className="formSharecenter">
                  <textarea
                    rows="5"
                    className="fs-20"
                    ref={postInput}
                    placeholder={`What is your mind ${currentUser.userName}?`}
                  ></textarea>
                </div>
                <div className="formSharebottom">
                  <div className="colortheme">
                    <div className="hover">thems</div>
                    <div className="hover">
                      <EmojiEmotions />
                    </div>
                  </div>
                  <div className="emoji">
                    <div className="f-1 hover">Add to Your post</div>
                    <div className="emojiset f-1">
                      <div className="hover">1</div>
                      <div className="hover">1</div>
                      <div className="hover">1</div>
                      <div className="hover">1</div>
                      <div className="hover">1</div>
                      <div className="hover">1</div>
                    </div>
                  </div>
                </div>
                <button className="btn-100" onClick={handleClose}>
                  Post
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {/* ==================================================== */}
        </div>
        <hr className="hr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="video" className="shareOption">
              <VideocamOffOutlined
                htmlColor="red"
                className="shareIcon mr-10"
              />
              <span className="shareOptionText lblack">Live video</span>
              <input style={{ display: "none" }} type="file" id="video" />
            </label>
          </div>
          <div className="shareOptions">
            <label htmlFor="photo" className="shareOption">
              <PermMedia htmlColor="green" className="shareIcon mr-10" />
              <span className="shareOptionText lblack">Photo/video</span>
            </label>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="yellow" className="shareIcon mr-10" />
            <span className="shareOptionText lblack">Feelings/activity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
