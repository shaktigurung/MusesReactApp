import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from "reactstrap";
import { ConnectedChapterSelector } from '../structure/ChapterSelector';
import ChapterOrganisers from '../structure/ChapterOrganisers';

class AboutUsPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Jumbotron fluid>
            <h1 className="display-3">About Us</h1>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <p className="lead muses-tertiary-text" style={{ textAlign: "justify" }} >We believe that everyone should try programming at least once in their life. Therefore we created a community where, in a friendly atmosphere with a great vibe you can try programming for the first time or, if you already code, learn something new about JavaScript and/or Node.js.</p>
                <hr className="my-2" />
                <p className=" lead muses-primary-text" style={{ textAlign: "justify" }}>Our half day coding bootcamps are also a great opportunity to grow your network and meet new people with similar interests. Come and join our next half-day coding bootcamp with lunch provided.</p>
              </Col>
            </Row>

          </Jumbotron>

          <ConnectedChapterSelector /><br />

          <ChapterOrganisers />

        </Container>
      </div>
      // Add a partners section 
    );
  }
}

export default AboutUsPage;
