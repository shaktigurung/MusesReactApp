import React, { Component } from 'react';
import { Container, Jumbotron, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class UnauthorizedPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Jumbotron>
                <h1 className="display-3">Unauthorized</h1>
                <p className="lead">Sorry, but you're not authorized to see this page.</p>
                <hr className="my-2" />
                <p className="lead">
                  <Link to="/">
                    <Button color="info">Back to Home page</Button>
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

export default UnauthorizedPage;