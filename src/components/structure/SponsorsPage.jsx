import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSponsors } from '../../actions/sponsorAction';
import { Container, Row, Col, Card, CardText, CardBody, CardLink, CardTitle } from "reactstrap";

class SponsorsPage extends Component {

  render() {
    if (this.props.sponsors) {
      return (
        <div>
          <Container fluid>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                {this.props.sponsors.map(sponsor =>
                  <Card>
                    <CardBody>
                      <CardTitle>{sponsor.name}</CardTitle>
                    </CardBody>
                    <img width="100%" src={sponsor.logo} alt="Sponsor logo" />
                    <CardBody>
                      <CardText>{sponsor.description}</CardText>
                      <CardLink href={sponsor.website}>Website</CardLink>
                    </CardBody>
                  </Card>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.sponsors
  }
}

export default connect(mapStateToProps, { getSponsors })(SponsorsPage);