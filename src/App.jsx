import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Profile from "./components/Profile";
import ProfileInfo from "./components/ProfileInfo";
import Orders from "./components/Orders";
import Settings from "./components/Settings";


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="info" element={<ProfileInfo />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
