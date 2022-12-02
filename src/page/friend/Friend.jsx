import "./friend.css";

import Topbar from "../../components/topbar/Topbar";
import {
  Diversity3,
  Group,
  KeyboardArrowRight,
  PersonAdd,
  Redeem,
  Settings,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Friend = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { currentUser } = useSelector((state) => state.user);

  const [frdRequest, SetFrdRequest] = useState(true);
  const [hide, SetHide] = useState(null);
  const [users, SetUsers] = useState([]);
  // const SERVER =
  //   "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;
  const SERVER = process.env.REACT_APP_SERVERAPI;
  // console.log(SERVER);
  const handleAddrequest = async (id, e) => {
    try {
      await axios.post(`${SERVER}users/send`, {
        id: id,
        currentId: currentUser._id,
      });
      SetHide(e.target.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const id = currentUser._id;
      const data = { id: id };
      try {
        const res = await axios.post(`${SERVER}users/`, data);
        SetUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    SetFrdRequest();
  }, [SERVER, currentUser._id]);
  // console.log(users);
  return (
    <div className="friend">
      <Topbar />
      <div className="friendContainer ">
        <div className="friendLeft box">
          <div className="friendListHeader">
            <h2>Friends</h2>
            <span>
              <Settings />
            </span>
          </div>
          <ul className="friendMenu">
            <li className="friendMenuList">
              <span className="friendMenuText">
                <Group />
                <span className="friendText">Home</span>
              </span>
            </li>
            <li className="friendMenuList">
              <span className="friendMenuText">
                <PersonAdd />
                <span className="friendText">Suggestions</span>
              </span>
              <KeyboardArrowRight />
            </li>
            <li className="friendMenuList">
              <span className="friendMenuText">
                <Diversity3 />
                <span className="friendText">All Friends</span>
              </span>
              <KeyboardArrowRight />
            </li>
            <li className="friendMenuList">
              <span className="friendMenuText">
                <Redeem />
                <span className="friendText">Birthdays</span>
              </span>
              <KeyboardArrowRight />
            </li>
            <li className="friendMenuList">
              <span className="friendMenuText">
                <Diversity3 />
                <span className="friendText">Custom lists</span>
              </span>
              <KeyboardArrowRight />
            </li>
          </ul>
        </div>
        <div className="friendRight">
          {frdRequest === true && (
            <div className="rightBox">
              <div className="rightHead">
                <h3>Friend Request</h3>
                <div>See all</div>
              </div>
              <div className="cardContainer">
                <div className="cards">
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>Vicky Kumar</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button className="cardsbtn confrim">Confrim</button>
                      <button className="cardsbtn remove">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>Vicky Kumar</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button className="cardsbtn confrim">Confrim</button>
                      <button className="cardsbtn remove">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>Vicky Kumar</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button className="cardsbtn confrim">Confrim</button>
                      <button className="cardsbtn remove">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>Vicky Kumar</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button className="cardsbtn confrim">Confrim</button>
                      <button className="cardsbtn remove">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>Vicky Kumar</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button className="cardsbtn confrim">Confrim</button>
                      <button className="cardsbtn remove">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="cards">
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>Vicky Kumar</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button className="cardsbtn confrim">Confrim</button>
                      <button className="cardsbtn remove">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          )}
          <div className="rightBox">
            <div className="rightHead">
              <h3>Peole you may know</h3>
              <div>See all</div>
            </div>
            <div className="cardContainer">
              {users.map((user) => (
                <div className="cards" key={user._id}>
                  <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                  <div className="cardsDetails">
                    <div className="cardsHeader">
                      <h5>{user.firstName + " " + user.lastName}</h5>
                      <div className="cardsMutual">54 mutual friends</div>
                    </div>
                    <div className="cardsAction">
                      <button
                        id={user._id}
                        className={
                          hide === user._id ? "cardsbtn hide" : "cardsbtn add"
                        }
                        onClick={(e) => {
                          handleAddrequest(user._id, e);
                        }}
                      >
                        Add friend
                      </button>
                      <button
                        id={user._id}
                        className={
                          hide === user._id
                            ? "cardsbtn hide"
                            : "cardsbtn remove"
                        }
                      >
                        Remove
                      </button>
                      <button
                        id={user._id}
                        className={
                          hide === user._id
                            ? "cardsbtn remove "
                            : "cardsbtn hide"
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
