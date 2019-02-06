import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from "reactstrap";
import { getSponsors, removeSponsor } from "../../actions/sponsorAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SponsorList extends Component {

  handleRemoveSponsor = async (sponsorId) => {
    const { removeSponsor, token } = this.props;
    await removeSponsor(sponsorId, token)
  }

  render() {
    const { sponsors, onEdit } = this.props;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Edit?</th>
                    <th>Remove?</th>
                  </tr>
                </thead>
                {sponsors.map(sponsor => (
                  <tbody key={sponsor._id}>
                    <tr>
                      <th scope="row">{sponsor.name} </th>
                      <td><Button outline color="warning" onClick={() => onEdit(sponsor)}>Edit</Button></td>
                      <td><Button outline color="danger" onClick={() => this.handleRemoveSponsor(sponsor._id)}>Delete</Button></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.sponsors,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { getSponsors, removeSponsor })(withRouter(SponsorList));