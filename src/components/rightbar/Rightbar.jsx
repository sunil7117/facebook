import { MoreHoriz, Search } from "@mui/icons-material";
import React from "react";
import "./rightbar.css";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="adds">Sponsored</div>
        <div className="pages">
          <div className="pageHeading">
            <div className="pageHeadingTitle">
              <h3 className="fs-20">Your Pages and profiles</h3>
            </div>
            <div className="more">
              <MoreHoriz />
            </div>
          </div>
          <div className="pageContent">
            <div className="pageContentImg">
              <img
                src="/assets/profile.jpg"
                alt=""
                className="sidebarProfile"
              />
            </div>
            <div className="pageContentText">
              <span className="fs-14 fw-600">
                Websites for Education Purpose
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="contacts">
          <div className="contactHeading">
            <div className="contact">
              <h4 className="fs-16 fw-600"> Contacts</h4>
            </div>
            <div className="contactIcons">
              <div className="contactIcon mr-10">Icon</div>
              <div className="contactIcon mr-10">
                <Search />
              </div>
              <div className="contactIcon">
                <MoreHoriz />
              </div>
            </div>
          </div>
          <div className="friends">
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
            <div className="friend">
              <div className="friendImg">
                <img
                  src="/assets/profile.jpg"
                  alt=""
                  className="sidebarProfile"
                />
                <div className="online"></div>
              </div>
              <div className="friendText">
                <span className="fs-16 fw-600">Raj kumar</span>
              </div>
            </div>
          </div>
        </div>
        <div className="groups">adds</div>
      </div>
    </div>
  );
};

export default Rightbar;
