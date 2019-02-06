import React, { Component } from 'react';
import MailingListForm from "../forms/MailingListForm"
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
import "./../../App.css";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron>
            <h1 className="display-3">Contact Us</h1>
            <p className="lead">If you have any questions, would like to become a mentor, sponsor an event or want to be involved in some way, drop us a line to<br /><b>info@musescodejs.org</b></p><br />
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Row>
                  <Col>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqnLzA8mjXC54APqPcjHEPRIZ64lw4iKuo_wD1otR5szO54A/viewform?c=0&w=1" target="_blank"><Button className="muses-tertiary">Become a mentor</Button></a>
                  </Col>
                  <Col>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1piDKcJxZj3SkwGVN_eWM-qToHDzAE0SRjZNhVh9OLZ-qmQ/viewform?c=0&w=1" target="_blank"><Button className="muses-tertiary">Become a sponsor</Button></a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <br /><hr className="my-2" /><br />
            <Row>
              <Col><a href="https://twitter.com/MusesCodeJSSyd" className="twitter" target="_blank"><i className="fab fa-5x fa-twitter"></i></a></Col>
              <Col><a href="https://www.instagram.com/musescodejssyd/" className="instagram" target="_blank"><i className="fab fa-5x fa-instagram"></i></a></Col>
              <Col><a href="https://github.com/muses-code-js" className="github" target="_blank"><i className="fab fa-5x fa-github"></i></a></Col>
              <Col><a href="https://www.meetup.com/en-AU/MusesCodeJS/" className="meetup" target="_blank"><i className="fab fa-5x fa-meetup"></i></a></Col>
              <Col xs="3"><a href="mailto:info@musescodejs.org" className="gmail"><i className="far fa-5x fa-envelope"></i></a></Col>
            </Row>
          </Jumbotron>
          <Row>
            <Col>
              <MailingListForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
