import {
  Apps,
  Bedtime,
  FacebookOutlined,
  Feedback,
  Groups2Outlined,
  Help,
  Home,
  KeyboardArrowRight,
  Logout,
  Message,
  Notifications,
  Search,
  SettingsApplications,
  Sports,
  YardOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/userSlice";
import "./topbar.scss";

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(currentUser);
  //   ========================================
  //          handleProfile
  const [hideProfile, setHideProfile] = useState(false);
  const handleProfile = () => {
    hideProfile === false && setHideProfile(true);
    hideProfile === true && setHideProfile(false);
  };
  //   ========================================
  //   =============================================
  //              LOgout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  //   =============================================
  return (
    <div className="topbar">
      <div className="left">
        <div className="logo">
          <FacebookOutlined className="logoIcon" />
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
            />{" "}
            <div className="hoverMenu">
              <span>Account</span>
            </div>
            <div className={hideProfile ? "profiles box show" : "profiles box"}>
              <div className="userProfile box">
                <div>
                  <img src={`${PF}/profile.jpg`} className="profile" alt="" />
                  <span className="optionName">{currentUser.firstName}</span>
                </div>
                <div>S</div>
              </div>
              <hr />
              <div className="settings">
                <div className="options">
                  <div>
                    <span className="circle">
                      <SettingsApplications className="optionIcon" />
                    </span>
                    <span className="optionName">Settings & Privcy</span>
                  </div>
                  <div>
                    <KeyboardArrowRight className="optionIcon" />
                  </div>
                </div>
                <div className="options">
                  <div>
                    <span className="circle">
                      <Help className="optionIcon" />
                    </span>
                    <span className="optionName">Help & Support</span>
                  </div>
                  <div>
                    <KeyboardArrowRight className="optionIcon" />
                  </div>
                </div>
                <div className="options">
                  <div>
                    <span className="circle">
                      <Bedtime className="optionIcon" />
                    </span>
                    <span className="optionName">Display & accessbility</span>
                  </div>
                  <div>
                    <KeyboardArrowRight className="optionIcon" />
                  </div>
                </div>
                <div className="options">
                  <div>
                    <span className="circle">
                      <Feedback className="optionIcon" />
                    </span>
                    <span className="optionName">Give feedback</span>
                  </div>
                </div>
                <div className="options">
                  <div>
                    <span className="circle">
                      <Logout className="optionIcon" />
                    </span>
                    <span className="optionName" onClick={handleLogout}>
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
