import {
  AddCircleOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "../../redux/userSlice";
import "./login.scss";
const Login = () => {
  // ...............................
  // server
  // ...............................
  // const SERVER =
  //   "http://localhost:9000/api/" || process.env.REACT_APP_SERVERAPI;
  const SERVER = process.env.REACT_APP_SERVERAPI;
  console.log(SERVER);
  const navigate = useNavigate();
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

  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  let userData;
  // const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
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
      // const res = await axios.post(`${SERVER}auth/signin`, userData);
      const res = await axios.post(`${SERVER}signin`, userData);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };
  // ==========================================
  // Register
  // ==========================================
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const firstName = useRef();
  const surName = useRef();
  const female = useRef();
  const male = useRef();
  const custom = useRef();
  const [startDate, setStartDate] = useState(new Date());
  const date = JSON.stringify(startDate);
  const dob = date.slice(1, 11);
  let gender;
  const handleRegister = async (e) => {
    dispatch(registerStart());
    e.preventDefault();
    if (male.current.checked) {
      gender = male.current.value;
    } else if (female.current.checked) {
      gender = female.current.value;
    } else {
      gender = custom.current.value;
    }
    try {
      userData = {
        firstName: firstName.current.value,
        lastName: surName.current.value,
        email: email.current.value,
        password: password.current.value,
        gender: gender,
        dob: dob,
      };
      const res = await axios.post(`${SERVER}auth/signup`, userData);
      dispatch(registerSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(registerFailure());
    }
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
                  <button className="create" onClick={handleShow}>
                    Create Acccount
                  </button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <h3>Sign up</h3>
                        <p>it's quick and easy</p>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form className="form">
                        <div className="formStyle">
                          <div className="formControl">
                            <div className="formText">
                              <input
                                type="text"
                                ref={firstName}
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="formControl">
                            <div className="formText">
                              <input
                                type="text"
                                ref={surName}
                                placeholder="Sur Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="formStyle">
                          <div className="formControl">
                            <div className="formText">
                              <input
                                type="text"
                                ref={email}
                                placeholder="First Name"
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
                              <span
                                onClick={handleShowPwd}
                                className="visibility"
                              >
                                {showPwd === true ? (
                                  <Visibility className="visibility" />
                                ) : (
                                  <VisibilityOff className="visibility" />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* DOB */}
                        <div className="formStyle">
                          <div className="formControl">
                            <DatePicker
                              selected={startDate}
                              onChange={(date: Date) => setStartDate(date)}
                            />
                          </div>
                        </div>
                        {/* Gender code */}
                        <div className="formStyle">
                          <div className="formControl">
                            <label htmlFor="male">
                              Male
                              <input
                                id="male"
                                type="radio"
                                value="male"
                                name="gender"
                                ref={male}
                              />
                            </label>
                            <label htmlFor="female">
                              Female
                              <input
                                id="female"
                                type="radio"
                                value="female"
                                name="gender"
                                ref={female}
                              />
                            </label>
                            <label htmlFor="custom">
                              Custom
                              <input
                                id="custom"
                                type="radio"
                                value="custom"
                                name="gender"
                                ref={custom}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="formStyle">
                          <div className="formControl">
                            <div className="formText">
                              <button onClick={handleRegister}>Sign Up</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </Modal.Body>
                  </Modal>
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
