import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./components/setting/Setting";
import Friend from "./page/friend/Friend";
import Home from "./page/home/Home";
import Login from "./page/login/Login";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  return (
    <>
      {/* <Text /> */}
      <BrowserRouter>
        <Routes>
          <Route element />
          <Route index element={currentUser ? <Home /> : <Login />} />
          <Route
            path="/login"
            element={currentUser == null ? <Login /> : <Home />}
          />
          <Route
            path="/friends"
            element={currentUser == null ? <Login /> : <Friend />}
          />
          <Route
            path="/setting"
            element={currentUser == null ? <Login /> : <Setting />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
