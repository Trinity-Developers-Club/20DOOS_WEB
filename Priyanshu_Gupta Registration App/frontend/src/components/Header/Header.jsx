import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <Link className="Link" to="/">
        Register Data
      </Link>
      <Link className="Link" to="/dashboard">
        Dashboard
      </Link>
    </div>
  );
}

export default Header;
