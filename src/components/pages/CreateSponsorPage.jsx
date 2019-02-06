import React, { Component } from "react";
import SponsorForm from "../forms/SponsorForm";
import { createSponsor, updateSponsor } from "./../../actions/sponsorAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UnauthorizedPage from "./UnauthorizedPage";
import SponsorList from "../structure/SponsorList";
import { Button, Badge } from 'reactstrap';

class CreateSponsorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      isCreate: false,
      sponsorToEdit: null,
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prepareForCreation = this.prepareForCreation.bind(this);
    this.prepareForEdit = this.prepareForEdit.bind(this);
    this.getInitialValues = this.getInitialValues.bind(this);
  }

  toggle() {
    this.setState({
      isFormOpen: !this.state.isFormOpen
    });
  }

  prepareForCreation() {
    this.setState({
      isCreate: true,
    });
    this.toggle();
  }

  prepareForEdit(sponsor) {
    this.setState({ sponsorToEdit: sponsor, isCreate: false });
    this.toggle();
  }

  handleSubmit = async (values) => {
    const { isCreate, sponsorToEdit } = this.state;
    const { createSponsor, updateSponsor, token } = this.props;
    let formData = new FormData();
    if (isCreate) {
      await createSponsor(values, token);
      alert("Sponsor created successfully!");
    } else {
      const sponsorId = sponsorToEdit._id;
      await updateSponsor(values, sponsorId, token);
      alert("Sponsor updated successfully!");
    }
    this.toggle();
  }

  getInitialValues() {
    const { isCreate, sponsorToEdit } = this.state;
    if (isCreate) {
      return {};
    }
    return {
      name: sponsorToEdit.name,
      description: sponsorToEdit.description,
      website: sponsorToEdit.website,
      image: sponsorToEdit.image,
    };
  }

  // onFormSubmit = async (formValues) => {
  //   const { createSponsor, updateSponsor, token } = this.props
  //   let formData = new FormData();
  //   if (this.state.file) {
  //     formData.append('file', this.state.file[0])
  //   }
  //   for (let key in formValues) {
  //     formData.append(key, formValues[key])
  //   }
  //   createSponsor(formData, token)
  //     .then(() => this.props.history.push("/sponsors"))
  // }

  render() {
    const { user } = this.props;
    const { isFormOpen, isCreate } = this.state;
    if (user) {
      return (
        <div>
          <h1> <Badge className="muses-primary">Sponsors</Badge> </h1> <br />
          <div className="createSponsor">
            <Button className="muses-secondary" onClick={this.prepareForCreation}>Create New Sponsor</Button>
          </div><br />
          <div className="sponsorList">
            <SponsorList onEdit={this.prepareForEdit} />
          </div>
          {
            isFormOpen &&
            <SponsorForm
              isOpen={isFormOpen}
              toggle={this.toggle}
              onSubmit={this.handleSubmit}
              initialValues={this.getInitialValues()}
              isCreate={isCreate}
            />
          }
        </div>
      );
    } else {
      return (
        <UnauthorizedPage />
      );
    }
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { createSponsor, updateSponsor })(withRouter(CreateSponsorPage));