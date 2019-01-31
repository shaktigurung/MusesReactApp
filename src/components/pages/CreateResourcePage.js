import React, { Component } from "react";
import ResourceForm from "./../forms/ResourceForm";
import { connect } from "react-redux";
import UnauthorizedPage from "./UnauthorizedPage";
import { Button, Modal } from "reactstrap";
import ResourceList from "../structure/ResourceList";

class CreateResourcePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <h1>Editing Resources</h1>
          <div className="createResource">
            <Button color="info" onClick={this.toggle}>Create a new resource</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ResourceForm />
            </Modal>
          </div><br />
          <div className="resourceList">
            <ResourceList />
          </div>
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
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(CreateResourcePage);
