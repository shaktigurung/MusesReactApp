import React, { Component } from "react";
import logoImage from "./../images/logo.svg";
import ReactRotatingText from "react-rotating-text";
import "../structure/ReactRotatingText.css";
import { Link } from "react-router-dom";
import { Button, Jumbotron, Container } from 'reactstrap';
import { connect } from "react-redux"

class HomePage extends Component {

  render() {
    let homeStyle = {
      fontSize: '30px',
      textAlign: 'center'
    }
    return (
      <div>
        <div style={{ fontSize: '30px' }}>
          <img src={logoImage} alt="logo" style={{ width: "40%" }} />
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Hello, world!</h1>
              <p className="lead" style={{ color: "#7985F0" }}>Muses run free JavaScript and Node.js workshops for women, non-binary and trans folk around Australia.</p>
              <hr className="my-2" />
              <p style={{ color: "#7985F0" }}>We are a community of people who learn together.</p>
              <Link to="/aboutus">
                <Button outline color="info" size="lg">See more</Button>
              </Link>
            </Container>
          </Jumbotron>
        </div>
        <h1>Code with us in</h1>
        <div style={{ fontSize: '60px' }}>
          <ReactRotatingText items={["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin"]} color="#DA3296" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(HomePage);

