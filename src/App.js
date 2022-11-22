import React from "react";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./page/profile/Profile";
// import Post from "./page/profile/post/Post";
import About from "./page/profile/about/About";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Login />} />
          <Route path="/login" element={currentUser ? <Home /> : <Login />} />
          <Route
            path="/:profile/"
            element={currentUser ? <Profile /> : <Login />}
          />
          <Route path="/:profile/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
