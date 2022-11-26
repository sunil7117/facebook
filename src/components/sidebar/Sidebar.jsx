import {
  ExpandCircleDown,
  Groups2,
  Home,
  People,
  SkipNext,
  WatchLater,
  YouTube,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import "./sidebar.css";
const Sidebar = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="topMenu">
          <ul className="menu">
            <li className="menuItem">
              <span className="menuIcon">
                <img src={PF + "profile.jpg"} alt="" className="profile" />
              </span>
              <span className="menuText">
                {currentUser.firstName + " " + currentUser.lastName}
              </span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <People />
              </span>
              <span className="menuText">Friends</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <Groups2 />
              </span>
              <span className="menuText">Groups</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <Home />
              </span>
              <span className="menuText">Marketplace</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <YouTube />
              </span>
              <span className="menuText">Watch</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <WatchLater />
              </span>
              <span className="menuText">Memories</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <ExpandCircleDown />
              </span>
              <span className="menuText">See more</span>
            </li>
          </ul>
        </div>
        <hr />
        <div className="bottomMenu">
          <ul className="menu shortMenu">
            <div className="shortcut">
              <h3>Your shortcuts</h3>
              <span className="edit">Edit</span>
            </div>
            <li className="menuItem">
              <span className="menuIcon">
                <img className="groupimg" src={PF + "profile.jpg"} alt="" />
              </span>
              <span className="menuText">Sunil Kumar</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <img className="groupimg" src={PF + "profile.jpg"} alt="" />
              </span>
              <span className="menuText">Sunil Kumar</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <img className="groupimg" src={PF + "profile.jpg"} alt="" />
              </span>
              <span className="menuText">Sunil Kumar</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <img className="groupimg" src={PF + "profile.jpg"} alt="" />
              </span>
              <span className="menuText">Sunil Kumar</span>
            </li>
            <li className="menuItem">
              <span className="menuIcon">
                <img className="groupimg" src={PF + "profile.jpg"} alt="" />
              </span>
              <span className="menuText">Sunil Kumar</span>
            </li>
          </ul>
          <div className="sideFooter">
            <div className="sideFooterTop">
              <span>Privacy · </span>
              <span>Terms · </span>
              <span>Advertising · </span>
              <span>
                Ad choices <SkipNext />·{" "}
              </span>
            </div>
            <div className="sideFooterBottom">
              <span>Cookies · </span> More · <span>Meta © 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
