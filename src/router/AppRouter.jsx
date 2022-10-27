import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Recipe from "../pages/home/Recipe";
import Navbar from "../components/navbar";
import Header from "../components/header/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
