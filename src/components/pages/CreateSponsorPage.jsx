import React, { Component } from "react";
import SponsorForm from "../forms/SponsorForm";
import { createSponsor } from "./../../actions/sponsorAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UnauthorizedPage from "./UnauthorizedPage";
import SponsorList from "../structure/SponsorList";
import { Badge } from 'reactstrap';

class CreateSponsorPage extends Component {
  state = { file: null}

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  onFormSubmit = async (formValues) => {
    const { createSponsor, token } = this.props;
    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }

    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    await createSponsor(formData, token);
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <h1> <Badge className="muses-primary">Sponsors</Badge> </h1> <br />
          <div className="createSponsor">
            <SponsorForm
              onFormSubmit={this.onFormSubmit}
              handleFileUpload={this.handleFileUpload}
              buttonLabel="Create New Sponsor"
            />
          </div><br />
          <div className="sponsorList">
            <SponsorList  />
          </div>
        </div>
      );
    } else {
      return (
        <UnauthorizedPage />
      );
    }
  }
};


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { createSponsor })(withRouter(CreateSponsorPage));