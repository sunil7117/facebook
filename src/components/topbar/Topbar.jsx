import {
  Apps,
  FacebookOutlined,
  Groups2Outlined,
  Home,
  Message,
  MoreHoriz,
  Notifications,
  Search,
  Sports,
  YardOutlined,
} from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Nodification from "./nodification/Nodification";
import Profile from "./profile/Profile";
import "./topbar.scss";

const Topbar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);
  // const SERVER =
  //   "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;

  const SERVER = process.env.REACT_APP_SERVERAPI;
  // console.log(currentUser);
  //   ========================================
  //          handleProfile
  const [hideProfile, setHideProfile] = useState(false);
  const handleProfile = () => {
    hideProfile === false && setHideProfile(true);
    hideProfile === true && setHideProfile(false);
  };
  //   ========================================
  //          handleNodification
  const [hideNodification, setHideNodification] = useState(false);
  const handleNodification = () => {
    hideNodification === false && setHideNodification(true);
    hideNodification === true && setHideNodification(false);
  };
  //   ========================================
  //================================================================
  //          send frd reqest
  const [frdreq, setFrdreq] = useState();
  useEffect(() => {
    const id = currentUser._id;
    const getFriendReqlist = async () => {
      const res = await axios.post(`${SERVER}users/requestlist`, { id: id });
      setFrdreq(res.data);
    };
    getFriendReqlist();
    // console.log(frdreq);
  }, [SERVER, currentUser._id]);
  //================================================================
  return (
    <div className="topbartest">
      <div className="lefttest">
        <Link to="/">
          <div className="logotest">
            <FacebookOutlined style={{ fontSize: "55px" }} />
          </div>
        </Link>
        <div className="searchtest">
          <Search className="searchIcontest" style={{ fontSize: "26px" }} />
          <input type="text" className="searchInput" placeholder="Search..." />
        </div>
      </div>
      <div className="centertest">
        <ul className="menuLinks">
          <Link to="/">
            <li className="menuLink">
              <Home className="menuIcon" />
              <div className="hoverMenu">
                <span>Home</span>
              </div>
            </li>
          </Link>
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
      <div className="righttest">
        <ul className="rightMenu ">
          <li className="RightMenuList">
            <Apps className="RightIcon" />
            <div className="RighthoverMenu">
              <span>Menu</span>
            </div>
          </li>
          <li className="RightMenuList">
            <Message className="RightIcon" />
            <div className="RighthoverMenu">
              <span>Message</span>
            </div>
          </li>
          <li className="RightMenuList" onClick={handleNodification}>
            <Notifications className="RightIcon" />
            <div className="RighthoverMenu">
              <span>Nodification</span>
            </div>
            {frdreq?.friendsRequest.length > 0 ? (
              <span className="badges">{frdreq?.friendsRequest.length}</span>
            ) : (
              ""
            )}

            <div
              className={
                hideNodification ? "nodification box show" : "nodification box"
              }
            >
              <div className="nodifi">
                <div className="nodifyContainer">
                  <div className="nodifyTop">
                    <div>
                      <h4>Notifications</h4>
                    </div>
                    <div>
                      <MoreHoriz />
                    </div>
                  </div>
                  {frdreq?.friendsRequest.map((id) => {
                    return <Nodification key={id} nid={id} />;
                  })}
                </div>
              </div>
            </div>
          </li>
          <li className="RightMenuList">
            <img
              src={`${PF}profile.jpg`}
              onClick={handleProfile}
              className="profile"
              alt=""
            />
            <div className="RighthoverMenu">
              <span>Profile</span>
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
