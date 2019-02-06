import React, { Component } from "react";
import ResourceForm from "../forms/ResourceForm";
import { createResource, updateResource } from "./../../actions/resourceAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UnauthorizedPage from "./UnauthorizedPage";
import ResourceList from "../structure/ResourceList";
import { Button, Badge } from 'reactstrap';

class CreateResourcePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormOpen: false,
      isCreate: false,
      resourceToEdit: null,
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

  prepareForEdit(resource) {
    this.setState({ resourceToEdit: resource, isCreate: false });
    this.toggle();
  }

  handleSubmit = async (values) => {
    const { isCreate, resourceToEdit } = this.state;
    const { createResource, updateResource, token } = this.props;
    if (isCreate) {
      await createResource(values, token);
      alert("Resource created successfully!");
    } else {
      const resourceId = resourceToEdit._id;
      await updateResource(values, resourceId, token);
      alert("Resource updated successfully!");
    }
    this.toggle();
  }

  getInitialValues() {
    const { isCreate, resourceToEdit } = this.state;
    if (isCreate) {
      return {};
    }
    return {
      title: resourceToEdit.title,
      description: resourceToEdit.description,
      link: resourceToEdit.link,
    };
  }

  render() {
    const { user } = this.props;
    const { isFormOpen, isCreate } = this.state;
    if (user) {
      return (
        <div>
           <h1> <Badge className="muses-primary">Resources</Badge> </h1> <br />
          <div className="createResource">
            <Button className="muses-secondary" onClick={this.prepareForCreation}>Create New Resource</Button>
          </div><br />
          <div className="resourceList">
            <ResourceList onEdit={this.prepareForEdit} />
          </div>
          {
            isFormOpen &&
            <ResourceForm
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

export default connect(mapStateToProps, { createResource, updateResource })(withRouter(CreateResourcePage));