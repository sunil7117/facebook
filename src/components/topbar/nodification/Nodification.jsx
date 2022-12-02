import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./nodification.css";
const Nodification = ({ nid }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const SERVER =
  //   "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;

  const SERVER = process.env.REACT_APP_SERVERAPI;
  const { currentUser } = useSelector((state) => state.user);
  //================================================================
  //          see frd reqest lists
  const [frdreqList, setFrdreqList] = useState([]);
  useEffect(() => {
    const getFriendReqlist = async (id) => {
      const res = await axios.post(`${SERVER}users/requestlist`, { id });

      setFrdreqList(res.data);
    };
    getFriendReqlist(nid);
  }, [SERVER, nid]);
  //================================================================
  const handleAccept = async (e) => {
    const btnId = e.target.id;
    const data = {
      requestedId: btnId,
      currentId: currentUser._id,
    };
    try {
      // console.log(`${SERVER}users/accept`, data);
      const res = await axios.put(`${SERVER}users/accept`, data);
      alert(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = async (e) => {
    const btnId = e.target.id;
    const data = {
      requestedId: btnId,
      currentId: currentUser._id,
    };
    try {
      // console.log(`${SERVER}users/accept`, data);
      const res = await axios.put(`${SERVER}users/accept`, data);
      alert(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="nodifyBottom">
      <div className="nmenu">
        <div className="nlist">
          <img src={`${PF}profile.jpg`} alt="" className="nimg" />
          <div className="ninfo">
            <div className="name">{frdreqList.firstName}</div>
            <div className="actions">
              <button
                className="nbtn accept"
                id={frdreqList._id}
                onClick={(e) => handleAccept(e)}
              >
                Accept
              </button>
              <button
                className="nbtn cancel"
                id={frdreqList._id}
                onClick={(e) => handleCancel(e)}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nodification;
