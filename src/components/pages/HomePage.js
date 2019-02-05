import React, { Component } from "react";
import logoImage from "./../images/logo.svg";
import bg from "./../images/musesbackground.jpg";
import ReactRotatingText from "react-rotating-text";
import "../structure/ReactRotatingText.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Jumbotron, Container, Row, Col } from 'reactstrap';
import HomeCarousel from "./../structure/HomeCarousel";


class HomePage extends Component {

  render() {
    return (
      <div>
        <div style={{ fontSize: '30px' }}>
          <Container>
            <Row>
              <Col xs="12">
                <img src={logoImage} alt="logo" style={{ width: "60%", marginTop: "-100px" }} />
              </Col>
            </Row>
            {/* <Row>
              <Col xs="12">
                <img src={bg} alt="mainbg" className="bg effect"  />
              </Col>
            </Row> */}
            <Row>
              <Col xs="12" style={{ marginTop: "20px", marginBottom: "20px" }}>
                <div>
                  <h1 className="muses-primary-text">Code with us in</h1>
                  <div style={{ fontSize: '60px' }}>
                    <ReactRotatingText items={["Sydney", "Melbourne", "Brisbane", "Perth"]} color="#DA3296" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

          <Jumbotron fluid className="muses-secondary">
            <Container fluid >
              <h1 className="muses-tertiary-text">Hello, EveryOne!</h1>
              <p className="lead" style={{ color: "#7985F0" }}>Muses run free JavaScript and Node.js workshops for women, non-binary and trans folk around Australia.We are a community of people who learn together.</p>
              <Link to="/aboutus">
                <Button outline className="muses-secondary" size="lg">See more</Button>
              </Link>
            </Container>
          </Jumbotron>

        </div>
        <HomeCarousel />
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

