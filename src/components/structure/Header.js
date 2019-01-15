import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header class="navBar">
        <Link to="/">Home</Link>
        <Link to="/resource">Resource</Link>
        <Link to="/contact">Contact</Link>
      </header>
    )
  }
}

export default Header;