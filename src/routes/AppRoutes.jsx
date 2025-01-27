import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Services from "../pages/Services";
import Appointment from "../pages/Appointment";
import Patients from "../pages/Patients";
import Login from "../pages/Login";

const AppRoutes = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/patients" element={<Patients />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;