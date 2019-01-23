import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import {createSponsor} from '../../actions/sponsorAction'

class SponsorForm extends Component {

  onFormSubmit = async(formValues) => {
    const { createSponsor, token } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    createSponsor(formData, token)
      .then(() => this.props.history.push("/sponsors"))
    
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files})
  }

  render() {
    const {handleSubmit} = this.props
    return (  
      <div>
        <form onSubmit={handleSubmit(this.onFormSubmit)} >
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" component="textarea" type="text" />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <Field name="website" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="logo">Logo</label>
            <input type="file" label="logo" onChange={this.handleFileUpload} />
          </div>
          <div>
            <button type="submit">Add Sponsor</button>
          </div>
        </form>
      </div>
    );
  }
}

const wrappedSponsorForm = reduxForm({
  form: "sponsor"
})(SponsorForm)

const mapStateToProps = (state) => {
  return {
    sponsors: state.sponsors,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, {createSponsor})(withRouter(wrappedSponsorForm));