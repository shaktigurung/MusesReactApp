import React, { Component } from 'react';
import UserForm from "../forms/UserForm";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updateUser } from "../../actions/registerAction"



class EditUserPage extends Component {
  state = { file: null }

  onFormSubmit = (formValues) => {
    const { updateUser, token } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    updateUser(formData, token)
      .then(() => this.props.history.push("/admin/profile"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    return (
      <UserForm 
        onFormSubmit={this.onFormSubmit} 
        handleFileUpload={this.handleFileUpload} 
        formType="Update"
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, { updateUser })(withRouter(EditUserPage))