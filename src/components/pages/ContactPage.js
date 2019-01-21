import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from "reactstrap";

class ContactPage extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Contact Us</h1>
          <p className="lead">If you have any questions, would like to become a mentor, sponsor an event or want to be involved in some way, drop us a line to<br /><b>info@musescodejs.org</b></p>
          <hr className="my-2" />
          <Container>
            <Row>
              <Col><a href="https://twitter.com/MusesCodeJSSyd" target="_blank"><i class="fab fa-5x fa-twitter"></i></a></Col>
              <Col><a href="https://www.instagram.com/musescodejssyd/" target="_blank"><i class="fab fa-5x fa-instagram"></i></a></Col>
              <Col><a href="https://github.com/node-girls-australia" target="_blank"><i class="fab fa-5x fa-github"></i></a></Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>

      // Add mentor's and sponsor's form.
    );
  }
}

export default ContactPage;
