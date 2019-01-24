import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoImage from "./../images/logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./Header.css";
import Logout from './Logout'

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const loggedIn = sessionStorage.getItem("token")
    return (

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> <img src={logoImage} alt="logo" style={{ width: "50%", height: "50%" }} /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/aboutus">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/events">Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/news">News</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/resources">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/sponsors">Sponsors</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact Us</NavLink>
            </NavItem>
            {loggedIn && <Logout />}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header;