import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSponsors } from '../../actions/sponsorAction';
import { Container, Row, Col, Card, CardBody, Badge, CardTitle } from "reactstrap";
import ErrorPage from "./../pages/ErrorPage";

class SponsorsPage extends Component {

  render() {
    // Inline CSS
    const mainCenter = {
      textAlign: "center",
      marginLeft: "30px"
    }
    if (this.props.sponsors) {
      return (

        <div>
          <Container fluid>
            <h1 className="display-3">Sponsors</h1>
            <p className="lead">If you have any questions, would like to become a sponsor of an event or want to be involved in some way, drop us a line to<br /><b>info@musescodejs.org</b></p><br />
            <Row> <h2 style={mainCenter} > Our current <Badge className="muses-secondary" >Sponsors</Badge></h2></Row>
            <Row>
              {this.props.sponsors.map(sponsor =>
                <Col xs="4">
                  <Card className="sponsor-card effect">
                    <a href={sponsor.website} target="_blank"><img width="100%" src={sponsor.image} alt="Sponsor logo" /></a>
                    <CardBody>
                      <CardTitle>{sponsor.name}</CardTitle>
                    </CardBody>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </div>
      )
    } else {
      return <ErrorPage />
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.sponsors
  }
}

export default connect(mapStateToProps, { getSponsors })(SponsorsPage);