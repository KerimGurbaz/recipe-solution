import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Recipe from "../pages/home/Recipe";
import NavBar from "../components/navbar/NavBar";
import Header from "../components/header/Header";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
