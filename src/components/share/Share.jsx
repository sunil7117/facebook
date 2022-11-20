import {
  EmojiEmotions,
  PermMedia,
  VideocamOffOutlined,
} from "@mui/icons-material";
import "./share.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Share = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
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
