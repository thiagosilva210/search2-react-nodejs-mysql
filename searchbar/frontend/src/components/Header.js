import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="p-3 navbar navbar-light navbar-custom">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
    </nav>
  );
}

export default Header;
