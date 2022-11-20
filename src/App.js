import React from "react";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={currentUser ? <Home /> : <Login />} />
          <Route path="/login" element={currentUser ? <Home /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
