import { Camera, Message, MoreHoriz, PersonAddAlt1 } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="profileTop">
          <div className="profileTopCover">
            <div className="coverTop">
              <img src={PF + "/profile.jpg"} alt="" className="coverImg" />
            </div>
            <div className="coverCenter">
              <div className="coverCenterInfo">
                <div className="userImg">
                  <img src={PF + "/profile.jpg"} alt="" className="usersImg " />
                </div>
                <div className="coveruserInfo">
                  <div className="userHeading">
                    <h3>Sunil kumar</h3>
                    <p className="lblack">10 Frirends .1 mutual frind</p>
                  </div>
                  <div className="userFriendInfo">
                    <div className="">ome</div>
                    <div className="userFriendInfoRight">
                      <div className="infoRight bgBlue fw-600 mr-10">
                        <PersonAddAlt1 className="mr-8" />
                        <span>Add Friend</span>
                      </div>
                      <div className="infoRight bgLdark fw-600">
                        <Message className="mr-8" />
                        <span>Add Friend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="coverBottom">
              <ul className="subMenuList">
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "black" };
                  }}
                  to=""
                >
                  <li className="subMenuListText">Posts</li>
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return { color: isActive ? "red" : "black" };
                  }}
                  to=""
                >
                  <li className="subMenuListText">About</li>
                </NavLink>
                <li className="subMenuListText">Friend</li>
                <li className="subMenuListText">Photos</li>
                <li className="subMenuListText">Videos</li>
                <li className="subMenuListText">Check-ins</li>
                <li className="subMenuListText">More img</li>
              </ul>
              <div className="more">
                <MoreHoriz />
              </div>
              {/* <div className="subMenuTwo">
                <div className="subMenuTwoLeft">
                  <img
                    src={PF + "/profile.jpg"}
                    alt=""
                    className="sidebarProfile mr-10"
                  />
                  <span>sunil Kumar</span>
                </div>
                <div className="subMenuTwoLeft">
                  <MoreHoriz />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
