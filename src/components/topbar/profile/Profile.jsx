import {
  Bedtime,
  Email,
  Feedback,
  Help,
  KeyboardArrowRight,
  KeyboardBackspace,
  Language,
  Lock,
  LockPerson,
  Logout,
  Pinch,
  Report,
  Settings,
  SettingsApplications,
  SyncAlt,
  Wifi,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/userSlice";

export const Setting = ({ openSetting }) => {
  const handleSettings = () => {
    openSetting.set(!openSetting.get);
  };
  return (
    <>
      <div className="settings">
        <div className="optionsHeading">
          <div className="Heading">
            <span className="circle">
              <KeyboardBackspace
                className="optionIconBack"
                onClick={handleSettings}
              />
            </span>
            <span className="optionNameHeading">Settings & Privcy</span>
          </div>
        </div>
        <Link
          to="/setting"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="options">
            <div>
              <span className="circle">
                <Settings className="optionIcon" />
              </span>
              <span className="optionName">setting</span>
            </div>
          </div>
        </Link>
        <div className="options">
          <div>
            <span className="circle">
              <Lock className="optionIcon" />
            </span>
            <span className="optionName">Privcy checkup</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <LockPerson className="optionIcon" />
            </span>
            <span className="optionName">Privcy center</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <SyncAlt className="optionIcon" />
            </span>
            <span className="optionName">Activity Log</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <SyncAlt className="optionIcon" />
            </span>
            <span className="optionName">Feed</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Language className="optionIcon" />
            </span>
            <span className="optionName">Language</span>
          </div>
        </div>
      </div>
    </>
  );
};
export const Helps = ({ openSetting }) => {
  const handleSettings = () => {
    openSetting.set(!openSetting.get);
  };
  return (
    <>
      <div className="settings">
        <div className="optionsHeading">
          <div className="Heading">
            <span className="circle">
              <KeyboardBackspace
                className="optionIconBack"
                onClick={handleSettings}
              />
            </span>
            <span className="optionNameHeading">Help & support</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Help className="optionIcon" />
            </span>
            <span className="optionName">Help center</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Email className="optionIcon" />
            </span>
            <span className="optionName">support inbox</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Report className="optionIcon" />
            </span>
            <span className="optionName">Report a problem</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Wifi className="optionIcon" />
            </span>
            <span className="optionName">check wifi connection</span>
          </div>
        </div>
      </div>
    </>
  );
};
export const Display = ({ openSetting }) => {
  const handleSettings = () => {
    openSetting.set(!openSetting.get);
  };
  return (
    <>
      <div className="settings">
        <div className="optionsHeading">
          <div className="Heading">
            <span className="circle">
              <KeyboardBackspace
                className="optionIconBack"
                onClick={handleSettings}
              />
            </span>
            <span className="optionNameHeading">Display & assessbility</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Bedtime className="optionIcon" />
            </span>
            <span className="optionName">Help & Support</span>
          </div>
        </div>
        <div className="options">
          <div>
            <span className="circle">
              <Pinch className="optionIcon" />
            </span>
            <span className="optionName">Help & Support</span>
          </div>
        </div>
      </div>
    </>
  );
};
const Profile = () => {
  //   =============================================
  //              LOgout
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  //   =============================================
  //   =============================================
  //              change settings
  const [openSetting, setOpenSetting] = useState(true);
  const [active, setActive] = useState(null);
  const handleSettings = (setting, e) => {
    setActive(setting);
    setOpenSetting(!openSetting);
  };
  //   =============================================
  return (
    <>
      {openSetting ? (
        <>
          <div className="userProfile box">
            <div>
              <img src={`${PF}profile.jpg`} className="profile" alt="" />
              <span className="optionName">{currentUser.firstName}</span>
            </div>
            <div>S</div>
          </div>
          <hr />
          <div className="settings">
            <div
              className="options"
              name="ok"
              onClick={(e) => {
                handleSettings("setting");
              }}
            >
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
            <div
              className="options"
              onClick={(e) => {
                handleSettings("help");
              }}
            >
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
            <div
              className="options"
              onClick={(e) => {
                handleSettings("display");
              }}
            >
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
        </>
      ) : (
        <>
          {active === "setting" && active === "setting" && (
            <Setting openSetting={{ get: openSetting, set: setOpenSetting }} />
          )}

          {active === "display" && (
            <Display openSetting={{ get: openSetting, set: setOpenSetting }} />
          )}
          {active === "help" && (
            <Helps openSetting={{ get: openSetting, set: setOpenSetting }} />
          )}
        </>
      )}
    </>
  );
};

export default Profile;
