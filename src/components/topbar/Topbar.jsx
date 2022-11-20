import React from "react";
import "./topbar.css";
import {
  FacebookRounded,
  Gamepad,
  Groups2Outlined,
  HomeOutlined,
  OndemandVideo,
  Search,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <div className="logo">
            <FacebookRounded className="icons" />
          </div>
          <div className="search">
            <Search className="searchIcon" />
            <input className="searchInput" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="topbarCenter">
          <div className="menus">
            <div className="menuStyle">
              <div className="menu">
                <HomeOutlined className="menuIcons" />
              </div>
              <div className="menu">
                <OndemandVideo className="menuIcons" />
              </div>
              <div className="menu">
                <HomeOutlined className="menuIcons" />
              </div>
              <div className="menu">
                <Groups2Outlined className="menuIcons" />
              </div>
              <div className="menu">
                <Gamepad className="menuIcons" />
              </div>
            </div>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarUser">
            <div className="user">
              <div className="userLink">one</div>
            </div>
            <div className="user">
              <div className="userLink">M</div>
              <div className="nodification fw-600 fs-12">10</div>
            </div>
            <div className="user">
              <div className="userLink">B</div>
              <div className="nodification fw-600 fs-12">1</div>
            </div>
            <div className="user">
              <div className="userProfileSettings">
                <img
                  className="userProfileImg"
                  src="/assets/profile.jpg"
                  alt=""
                />
              </div>
            </div>

            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
