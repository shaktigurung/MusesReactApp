import React, { Component } from "react";
import logoImage from "./../images/logo.svg";
import ReactRotatingText from "react-rotating-text";
import "../structure/ReactRotatingText.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';

class HomePage extends Component {

  render() {
    return (
      <div>
        <div style={{ fontSize: '30px' }}>
          <Container>
            <Row>
              <Col xs="6"><img src={logoImage} alt="logo" style={{ width: "100%" }} /></Col>
              <Col xs="6" style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <div>
                  <h1>Code with us in</h1>
                  <div style={{ fontSize: '60px' }}>
                    <ReactRotatingText items={["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin"]} color="#DA3296" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-4">Hello, EveryOne!</h1>
              <p className="lead" style={{ color: "#7985F0" }}>Muses run free JavaScript and Node.js workshops for women, non-binary and trans folk around Australia.We are a community of people who learn together.</p>
              <Link to="/aboutus">
                <Button outline className="muses-secondary" size="lg">See more</Button>
              </Link>
            </Container>
          </Jumbotron>
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

