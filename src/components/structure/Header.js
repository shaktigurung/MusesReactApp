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
import "./../../App.css";
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
    const loggedIn = sessionStorage.getItem("token");
    return (

      <Navbar className="muses-secondary" light expand="md">
        <NavbarBrand > <img src={logoImage} alt="logo" className="logo effect" /></NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto " navbar>
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
            <div className="token">
              {loggedIn && <Link to="/admin/profile" className="muses-primary-text"><i class="fas fa-user-circle"></i>Profile</Link>}
              {loggedIn && <p>You are logged in </p>}
              {loggedIn && <Logout />}
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header;