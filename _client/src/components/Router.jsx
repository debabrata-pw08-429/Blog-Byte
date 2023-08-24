import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import CreatePost from "./CreatePost";
import Home from "./Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default Router;
