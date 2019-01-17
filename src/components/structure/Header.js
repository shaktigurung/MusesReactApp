import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="navBar">
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/events">Events</Link>
        <Link to="/news">News</Link>
        <Link to="/resource">Resources</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/contact">Contact Us</Link>

      </header>
    )
  }
}

export default Header;