import {
  ExpandCircleDown,
  Groups,
  HomeOutlined,
  OndemandVideo,
  WatchLater,
} from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import "./sidebar.css";
const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarMenus">
          <li className="sidebarMenuItem">
            <img
              className="sidebarProfile mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <h3 className="sidebarText fs-16">{currentUser.userName}</h3>
          </li>
          <li className="sidebarMenuItem iconColor">
            <Groups className="sideMenuIcon mr-10" />
            <span className="sidebarText">Friends</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <Groups className="sideMenuIcon mr-10" />
            <span className="sidebarText">Groups</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <HomeOutlined className="sideMenuIcon mr-10" />
            <span className="sidebarText">Marketplace</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <OndemandVideo className="sideMenuIcon mr-10" />
            <span className="sidebarText">Watch</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <WatchLater className="sideMenuIcon mr-10" />
            <span className="sidebarText">Memories</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <ExpandCircleDown className="sideMenuIcon mr-10" />
            <span className="sidebarText">See more</span>
          </li>
          <hr />
        </ul>
        <ul className="sidebarMenus">
          <h3 className="shortcut">Your shortcuts</h3>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
          <li className="sidebarMenuItem iconColor">
            <img
              className="sidebarshortcut mr-10"
              src="/assets/profile.jpg"
              alt=""
            />
            <span className="sidebarText">Sunil kumar</span>
          </li>
        </ul>
      </div>
      <div className="sidebarFooter">
        <div className="sidebarFooter1">
          <div>Privacy.</div>
          <div>Terms.</div>
          <div>Advertising.</div>
          <div>Add choice.</div>
        </div>
        <div className="sidebarFooter1">
          <div>Privacy.</div>
          <div>Terms.</div>
          <div>Advertising.</div>
          <div>Add choice.</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
