import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "./Portfolio/Components/navbar";
import Home from "./Portfolio/Components/home";
import Footer from "./Portfolio/Components/footer";
import Sidebar from "./Portfolio/Components/sidebar";

import AboutSingle from "./Portfolio/Pages/about-single";
import ContactSingle from "./Portfolio/Pages/contact-single";
import ProjectSingle from "./Portfolio/Pages/projects-single";
import ThankYou from "./Portfolio/Pages/thankyou";

document.title = "Chirag";

const Main = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactSingle />} />
          <Route path="/about" element={<AboutSingle />} />
          <Route path="/projects" element={<ProjectSingle />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Main;
