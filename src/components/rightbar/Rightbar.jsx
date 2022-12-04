import { MoreHoriz, Search, VideoCall } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./rightbar.scss";

export const Friends = ({ friendid }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const SERVER =
  //   "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;

  const SERVER = process.env.REACT_APP_SERVERAPI;
  console.log(`${SERVER}users/requestlist`, { id });
  const [frdreqList, setFrdreqList] = useState([]);
  useEffect(() => {
    const getFriendReqlist = async (id) => {
      const res = await axios.post(`${SERVER}users/requestlist`, { id });
      setFrdreqList(res.data);
    };
    getFriendReqlist(friendid);
  }, [SERVER, friendid]);
  return (
    <div className="contactFriend">
      <div className="friendImg">
        <img src={PF + "profile.jpg"} alt="" className="profile " />
        <span className="userName">{frdreqList.firstName}</span>
        <div className="online"></div>
      </div>
    </div>
  );
};

const Rightbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const SERVER =
    "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;

  // const SERVER = process.env.REACT_APP_SERVERAPI;

  const [getList, setGetList] = useState();
  useEffect(() => {
    const getFriendReqlist = async (id) => {
      const res = await axios.post(`${SERVER}users/requestlist`, { id });

      setGetList(res.data);
    };
    getFriendReqlist(currentUser._id);
  }, [SERVER, currentUser._id]);

  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        <div className="sponser">sponser settings</div>
        <hr />
        <div className="p&p">page & profile</div>
        <hr />
        <div className="contact">
          <div className="contactTop">
            <h5>Contacts</h5>

            <div className="more">
              <div className="contactRightl">
                <VideoCall className="contactIcon" />
              </div>
              <div className="contactRightc">
                <Search className="contactIcon" />
              </div>
              <div className="contactRightr">
                <MoreHoriz />
              </div>
            </div>
          </div>
          <div className="contactFriends">
            {getList?.friends.map((id) => (
              <Friends key={id} friendid={id} />
            ))}
          </div>
        </div>
        <hr />
        <div className="groups">Create groups</div>
      </div>
    </div>
  );
};

export default Rightbar;
