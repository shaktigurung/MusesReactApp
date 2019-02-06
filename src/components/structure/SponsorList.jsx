import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from "reactstrap";
import { removeSponsor, updateSponsor } from "../../actions/sponsorAction";
import SponsorForm from "../forms/SponsorForm"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class SponsorList extends Component {
  state = { file: null }
  
  handleRemoveSponsor = async (id) => {
    const { removeSponsor, token } = this.props;
    await removeSponsor(id, token)
  }

  onFormSubmit = async (formValues, sponsor) => {
    const { updateSponsor, token } = this.props;
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    await updateSponsor(formData, token, sponsor._id);
  }



  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    const { sponsors } = this.props;
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
                      <td><SponsorForm
                        onFormSubmit={this.onFormSubmit}
                        sponsor={sponsor}
                        handleFileUpload={this.handleFileUpload}
                        key={sponsor._id}
                        buttonLabel="Edit"
                      /></td>
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

export default connect(mapStateToProps, { removeSponsor, updateSponsor })(withRouter(SponsorList));