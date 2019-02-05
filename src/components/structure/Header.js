import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"
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
import {updateUser} from "../../actions/registerAction"

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      file: null
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onFormSubmit = (formValues) => {
    const { updateUser, token } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    updateUser(formData, token)
      .then(() => this.props.history.push("/admin/profile"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    const loggedIn = sessionStorage.getItem("token");
    return (

      <Navbar color="light" light expand="md">
        <Link to="/"><img src={logoImage} alt="logo" className="logo effect" /></Link>
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
            {/* <NavItem>
              <NavLink tag={Link} to="/news">News</NavLink>
            </NavItem> */}
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
              {loggedIn && <Link to="/admin/profile" className="muses-primary-text"><i className="fas fa-user-circle"></i>Profile</Link>}
              {loggedIn && <p>You are logged in </p>}
              {loggedIn && <Logout />}
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {updateUser})(withRouter(Header));