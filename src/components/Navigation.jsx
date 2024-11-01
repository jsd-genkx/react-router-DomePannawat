import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link> <br />
      <Link to="/about">ABout</Link> <br />
      <Link to="/contact">Contact</Link> <br />
      <Link to="/products">Product List</Link> <br />
      <Link to="/profile/*">Profile</Link> <br />
    </nav>
  );
}

export default Navigation;
