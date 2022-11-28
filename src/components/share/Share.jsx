import "./share.css";
import React, { useState } from "react";
import {
  EmojiEmotions,
  Flag,
  LocationCity,
  MoreHoriz,
  PhotoAlbum,
  VideoCall,
} from "@mui/icons-material";
import { Button, Modal } from "react-bootstrap";

const Share = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // Open Model for share
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShareShow = () => setShow(true);

  // Open Model for share
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
                  placeholder="What on your mind, sunil?"
                ></textarea>
              </div>
              <div className="modelUserInfo">
                <div>T</div>
                <div>
                  <EmojiEmotions />
                </div>
              </div>
              <div className="modelUserInfo">
                <div className="addPosts">Add to your post</div>
                <div className="posts">
                  <span>
                    <PhotoAlbum />
                  </span>
                  <span>
                    <EmojiEmotions />
                  </span>
                  <span>
                    <LocationCity />
                  </span>
                  <span>
                    <Flag />
                  </span>
                  <span>
                    <MoreHoriz />
                  </span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
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
