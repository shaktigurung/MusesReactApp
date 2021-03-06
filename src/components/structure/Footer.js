import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import logoImage from "./../images/logo.svg";
import { Container,Row, Col } from "reactstrap";

import "./../../App.css";


class Footer extends Component {
 
  render() {
   
    return (
            <div>
             <Container>
                    <Row>
                        <Col xs="2"></Col>
                        <Col xs="8">
                            <h2 className="footer-header">Contact Us</h2>
                            <p>If you have any questions, would like to become a mentor, sponsor an event or want
                                to be involved in some way, drop us a line to <a href="mailto:info@musescodejs.org"
                                                                                className="footer__mailto">info@musescodejs.org</a>.
                            </p>
                        </Col>
                        <Col xs="2"></Col>
                    </Row>
                    <Row>
                        <Col xs="4"></Col>
                        <Col xs="4">
                            <a href="https://twitter.com/MusesCodeJSSyd" className="twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-twitter"></i></a>
                            <a href="https://www.instagram.com/musescodejssyd/" className="instagram ml-1" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-instagram"></i></a>
                            <a href="https://github.com/muses-code-js" className="github ml-1" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-github"></i></a>
                            <a href="https://www.meetup.com/en-AU/MusesCodeJS/" className="meetup" target="_blank" rel="noopener noreferrer"><i className="fab fa-2x fa-meetup"></i></a>
                            <a href="mailto:info@musescodejs.org" className="gmail ml-1" target="_blank" rel="noopener noreferrer"><i className="far fa-2x fa-envelope"></i></a>
                        </Col>
                        <Col xs="4"></Col>
                    </Row>
            </Container>
            <div className ="footer-bottom text-center">Copyright &copy; 2019 Muses Code JS</div>
            </div>
    );
  }
}

export default Footer;






 