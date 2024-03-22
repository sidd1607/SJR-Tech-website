import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Components/Header.jsx";
import OurTeam from "./Components/OurTeam.jsx";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Services from "./Components/Services.jsx";

import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/Home.scss";
import "./Styles/Footer.scss";
import "./Styles/ContactUs.scss";
import "./Styles/Services.scss";
import "./Styles/OurTeam.scss";
import "./Styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ConactUs" element={<ContactUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/OurTeam" element={<OurTeam />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
