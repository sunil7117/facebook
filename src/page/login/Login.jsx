import React, { useRef, useState } from "react";
import "./login.css";
import Modal from "react-bootstrap/Modal";
import { PlusOneOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    var userData;
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
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signin", userData);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="top">
          <div className="topLeft">
            <div className="card">
              <div className="cardImg">
                <PlusOneOutlined />
              </div>
              <div className="cardTitle">Add Account</div>
            </div>
          </div>
          <div className="topRight">
            <form className="form">
              <div className="inputEmail">
                <input
                  className="inputText"
                  placeholder="phone / email "
                  ref={email}
                />
              </div>
              <div className="inputPassword">
                <input
                  className="inputText"
                  type="password"
                  ref={password}
                  placeholder="Password"
                />
              </div>
              <div className="inputLogin">
                <button onClick={handleLogin} className="b-100" type="submit">
                  Login
                </button>
              </div>
              <div className="forgetPassword">
                <div className="forgetPasswordLink">Forget password?</div>
              </div>
              <hr></hr>
              <botton className="adduser" onClick={handleShow}>
                Create New Account
              </botton>
              {/* ==================================================== */}
              <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="modelWith"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Sign up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="formSingup">
                    <div className="formgroup">
                      <div className="formField">
                        <input
                          className="inputText"
                          type="text"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="formField">
                        <input
                          className="inputText"
                          type="text"
                          placeholder="Sur Name"
                        />
                      </div>
                    </div>
                    <div className="formgroup">
                      <div className="formField">
                        <input
                          className="inputText"
                          type="text"
                          placeholder="Email or Mobile number"
                        />
                      </div>
                    </div>
                    <div className="formgroup">
                      <div className="formField">
                        <input
                          type="text"
                          className="inputText"
                          placeholder="New Password"
                        />
                      </div>
                    </div>
                    <div className="lblack fs-12">Date of Birth</div>
                    <div className="formgroup">
                      <div className="formField">
                        <select className="inputText ">
                          <option>1</option>
                        </select>
                        <select className="inputText">
                          <option>Jan</option>
                        </select>
                        <select className="inputText">
                          <option>2013</option>
                        </select>
                      </div>
                    </div>
                    <div className="lblack fs-12">Gender</div>
                    <div className="formgroup">
                      <div className="formField">
                        <div className="radioGroup">
                          <label htmlFor="female">Female</label>
                          <input
                            type="radio"
                            name="sex"
                            value="female"
                            id="female"
                          />
                        </div>
                      </div>
                      <div className="formField">
                        <div className="radioGroup">
                          <label htmlFor="male">Male</label>
                          <input
                            type="radio"
                            name="sex"
                            value="male"
                            id="male"
                          />
                        </div>
                      </div>
                      <div className="formField">
                        <div className="radioGroup">
                          <label htmlFor="custom">custom</label>
                          <input
                            type="radio"
                            name="sex"
                            value="custom"
                            id="custom"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="lblack fs-12">
                      People who use our service may have uploaded your contact
                      information to Facebook.
                    </p>
                    <p className="lblack fs-12">
                      Learn more. By clicking Sign Up, you agree to our Terms,
                      Privacy Policy and Cookies Policy. You may receive SMS
                      notifications from us and can opt out at any time.
                    </p>
                  </div>

                  <button className="adduser" onClick={handleClose}>
                    Sign Up
                  </button>
                </Modal.Body>
              </Modal>
              {/* ==================================================== */}
            </form>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default Login;
