import React from "react";
import Landing from "./Pages/main_page/landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cart from "./cart";
import Contact from "./Pages/main_page/contact";
import Navbar from "./Pages/main_page/navbar";
import About from "./Pages/main_page/about";
import Footer from "./Pages/main_page/footer";
import Single_prod from "./Pages/main_page/Single_prod";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Single_prod/:id" element={<Single_prod />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
