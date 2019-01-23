import React, { Component } from "react";
import ResourceForm from "./../forms/ResourceForm";
import { connect } from "react-redux";

class CreateResourcePage extends Component {
  state = {}
  render() {
    const { user } = this.props;
    if (user) {
      return (
        <ResourceForm />
      );
    } else {
      return (
        <h1>Unauthorized</h1>
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