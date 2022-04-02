import React, { useEffect } from "react";
import Navbar from "./Components/navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/home.jsx";
import Footer from "./Components/footer.jsx";

import AboutSingle from "./Pages/about.single.jsx";
import ContactSingle from "./Pages/contact-single.jsx";
import ProjectSingle from "./Pages/projects-single.jsx";
import ThankYou from "./Pages/thankyou.jsx";

document.title = "Chirag";

const Main = () => {
  return (
    <>
      <Router>
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
