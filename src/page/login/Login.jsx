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
  let userData;
  let gender = null;
  const handleClose = async () => {
    setShow(false);
    if (female.current.checked) {
      gender = female.current.value;
    } else if (male.current.checked) {
      gender = male.current.value;
    } else {
      gender = custom.current.value;
    }
    const date = new Date(`${selecty.value}-${selectm.value}-${selectd.value}`);
    if (isNaN(email.current.value)) {
      userData = {
        firstName: firstName.current.value,
        lastName: surName.current.value,
        email: email.current.value,
        password: password.current.value,
        dob: date.toLocaleDateString(),
        gender: gender,
      };
    } else {
      userData = {
        firstName: firstName.current.value,
        lastName: surName.current.value,
        mobile: email.current.value,
        password: password.current.value,
        dob: date.toLocaleDateString(),
        gender: gender,
      };
    }
  };

  const handleShow = () => setShow(true);
  const firstName = useRef();
  const surName = useRef();
  const loginemail = useRef();
  const email = useRef();
  const password = useRef();
  const female = useRef();
  const male = useRef();
  const custom = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectd, setSelectd] = useState(null);
  const [selectm, setSelectm] = useState(null);
  const [selecty, setSelecty] = useState(null);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (isNaN(loginemail.current.value)) {
      userData = {
        email: loginemail.current.value,
        password: password.current.value,
      };
    } else {
      userData = {
        mobile: loginemail.current.value,
        password: password.current.value,
      };
    }
    console.log(userData);
    dispatch(loginStart());
    try {
      const res = await axios.post(
        `${process.env.SERVERAPI}auth/signin`,
        userData
      );
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
                  ref={loginemail}
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
                          ref={firstName}
                        />
                      </div>
                      <div className="formField">
                        <input
                          className="inputText"
                          type="text"
                          placeholder="Sur Name"
                          ref={surName}
                        />
                      </div>
                    </div>
                    <div className="formgroup">
                      <div className="formField">
                        <input
                          className="inputText"
                          type="text"
                          placeholder="Email or Mobile number"
                          ref={email}
                        />
                      </div>
                    </div>
                    <div className="formgroup">
                      <div className="formField">
                        <input
                          type="text"
                          className="inputText"
                          placeholder="New Password"
                          ref={password}
                        />
                      </div>
                    </div>
                    <div className="lblack fs-12">Date of Birth</div>
                    <div className="formgroup">
                      <div className="formField">
                        <select
                          className="inputText "
                          ref={(input) => setSelectd(input)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </select>
                        <select
                          className="inputText"
                          ref={(input) => setSelectm(input)}
                        >
                          <option value="01">Jan</option>
                          <option value="02">Feb</option>
                        </select>
                        <select
                          className="inputText"
                          ref={(input) => setSelecty(input)}
                        >
                          <option value="2013">2013</option>
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
                            ref={female}
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
                            ref={male}
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
                            ref={custom}
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
