import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Jumbotron>
                <h1 className="display-3">Error :(</h1>
                <p className="lead" style={{ color: "red" }}>Sorry, but an error has ocurred and the page you're looking for was not found.</p>
                <hr className="my-2" />
                <p className="lead">
                  <Link to="/">
                    <Button className="muses-primary" >Back to Home page</Button>
                  </Link>
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default ErrorPage;