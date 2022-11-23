import {
  AddCircleOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import axios from "axios";
import { useRef, useState } from "react";
import "./login.scss";
const Login = () => {
  // ...............................
  // show hide password
  // ...............................
  const [showPwd, setShowPwd] = useState(true);
  const handleShowPwd = () => {
    if (showPwd === true) {
      setShowPwd(false);
    } else {
      setShowPwd(true);
    }
  };
  // =================================
  //              Login
  // =================================
  const SERVER = process.env.REACT_APP_SERVERAPI;
  console.log(SERVER);
  const email = useRef();
  const password = useRef();
  const handleLogin = async (e) => {
    e.preventDefault();
    let userData;
    if (isNaN(email.current.value)) {
      userData = {
        email: email.current.value,
        password: password.current.value,
      };
    } else {
      userData = {
        mobile: email.current.value,
        password: password.current.value,
      };
    }
    const res = await axios.post(`${SERVER}auth/signin`, userData);
    console.log(res.data);
  };
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="left">
            <div className="userBox">
              <div className="addUser">
                <AddCircleOutlined className="addIcon" />
              </div>
              <div className="add">Add Account</div>
            </div>
          </div>
          <div className="right">
            <div className="rightContainer">
              <form className="form">
                <div className="formStyle">
                  <div className="formControl">
                    <div className="formText">
                      <input
                        type="text"
                        ref={email}
                        placeholder="Email Address or Mobile"
                      />
                    </div>
                  </div>
                </div>
                <div className="formStyle">
                  <div className="formControl">
                    <div className="formText">
                      <input
                        type={showPwd === true ? "password" : ""}
                        placeholder="Password"
                        ref={password}
                      />
                      <span onClick={handleShowPwd} className="visibility">
                        {showPwd === true ? (
                          <Visibility className="visibility" />
                        ) : (
                          <VisibilityOff className="visibility" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="formStyle">
                  <div className="formControl">
                    <div className="formText">
                      <button onClick={handleLogin}>Login</button>
                    </div>
                  </div>
                </div>
                <div className="formStyle">
                  <div className="formControl">
                    <div className="forget">Forget Password ?</div>
                  </div>
                </div>
                <hr />
              </form>
              <div className="formStyle">
                <div className="formControl">
                  <button className="create">Create Acccount</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
