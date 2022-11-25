import {
  Apps,
  FacebookOutlined,
  Groups2Outlined,
  Home,
  Message,
  Notifications,
  Search,
  Sports,
  YardOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Profile from "./profile/Profile";
import "./topbar.scss";

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);
  //   ========================================
  //          handleProfile
  const [hideProfile, setHideProfile] = useState(false);
  const handleProfile = () => {
    hideProfile === false && setHideProfile(true);
    hideProfile === true && setHideProfile(false);
  };
  //   ========================================

  return (
    <div className="topbar">
      <div className="left">
        <div className="logo">
          <Link to="/">
            <FacebookOutlined className="logoIcon" />
          </Link>
          <div className="search">
            <Search className="searchIcon" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
      <div className="center">
        <ul className="menuLinks">
          <li className="menuLink">
            <Home className="menuIcon" />
            <div className="hoverMenu">
              <span>Home</span>
            </div>
          </li>
          <li className="menuLink">
            <YardOutlined className="menuIcon" />
            <div className="hoverMenu">
              <span>Watch</span>
            </div>
          </li>
          <li className="menuLink">
            <Home className="menuIcon" />
            <div className="hoverMenu">
              <span>MarketPlace</span>
            </div>
          </li>
          <li className="menuLink">
            <Groups2Outlined className="menuIcon" />
            <div className="hoverMenu">
              <span>Groups</span>
            </div>
          </li>
          <li className="menuLink">
            <Sports className="menuIcon" />
            <div className="hoverMenu">
              <span>Gaming</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="menuLinks end">
          <li className="menuLink p">
            <Apps className="menuIcons" />
            <div className="hoverMenu">
              <span>Menu</span>
            </div>
          </li>
          <li className="menuLink p">
            <Message className="menuIcons" />
            <div className="hoverMenu">
              <span>Message</span>
            </div>
          </li>
          <li className="menuLink p">
            <Notifications className="menuIcons" />
            <div className="hoverMenu">
              <span>Nodification</span>
            </div>
          </li>
          <li className="menuLink p">
            <img
              src={`${PF}/profile.jpg`}
              onClick={handleProfile}
              className="profile"
              alt=""
            />
            <div className="hoverMenu">
              <span>Account</span>
            </div>
            <div className={hideProfile ? "profiles box show" : "profiles box"}>
              <Profile />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
