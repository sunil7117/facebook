import React from "react";
import "./friend.css";

import Topbar from "../../components/topbar/Topbar";
import {
  Diversity3,
  Group,
  Groups,
  KeyboardArrowRight,
  PersonAdd,
  Redeem,
  RedeemRounded,
  Settings,
} from "@mui/icons-material";

const Test = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="friend">
      <Topbar />
      <div className="friendContainer ">
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
        </div>
      </div>
    </div>
  );
};

export default Test;
