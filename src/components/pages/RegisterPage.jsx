import React, { Component } from 'react';
import UserForm from "../forms/UserForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createUser } from "../../actions/registerAction"

class RegisterPage extends Component {
  state = { file: null }

  onFormSubmit = (formValues) => {
    const { createUser } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    createUser(formData)
      .then(() => this.props.history.push("/admin/dashboard"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    return (

      <UserForm 
        onFormSubmit={this.onFormSubmit} 
        handleFileUpload={this.handleFileUpload} 
        formType="Register"
        buttonLabel="Sign Up"
      />

    );
  }
}

export default connect(null, { createUser })(withRouter(RegisterPage));