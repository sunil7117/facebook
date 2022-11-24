import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/Login";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element />
          <Route index element={currentUser ? <Home /> : <Login />} />
          <Route
            path="/login"
            element={currentUser == null ? <Login /> : <Home />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
