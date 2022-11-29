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

const Friend = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [frdRequest, SetFrdRequest] = useState(true);
  useEffect(() => {
    SetFrdRequest();
  }, []);
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
              <div className="cards">
                <img src={PF + "profile.jpg"} alt="" className="cardsImg" />
                <div className="cardsDetails">
                  <div className="cardsHeader">
                    <h5>Vicky Kumar</h5>
                    <div className="cardsMutual">54 mutual friends</div>
                  </div>
                  <div className="cardsAction">
                    <button className="cardsbtn add">Add friend</button>
                    <button className="cardsbtn remove">Remove</button>
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
                    <button className="cardsbtn add">Add friend</button>
                    <button className="cardsbtn remove">Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
