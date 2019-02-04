import React, { Component } from 'react';
import MailingListForm from "../forms/MailingListForm"
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./../../App.css";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Contact Us</h1>
          <p className="lead">If you have any questions, would like to become a mentor, sponsor an event or want to be involved in some way, drop us a line to<br /><b>info@musescodejs.org</b></p>
          <hr className="my-2" />
          <MailingListForm />
          <Container>
            <Row>
              <Col xs="3"><a href="https://twitter.com/MusesCodeJSSyd" className="twitter"><i className="fab fa-5x fa-twitter"></i></a></Col>
              <Col xs="3"><a href="https://www.instagram.com/musescodejssyd/" className="instagram"><i className="fab fa-5x fa-instagram"></i></a></Col>
              <Col xs="3"><a href="https://github.com/node-girls-australia" className="github"><i className="fab fa-5x fa-github"></i></a></Col>
              <Col xs="3"><a href="mailto:info@musescodejs.org" className="gmail"><i className="far fa-5x fa-envelope"></i></a></Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>

      // Add mentor's and sponsor's form.
    );
  }
}

export default ContactPage;
