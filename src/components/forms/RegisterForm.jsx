import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {createUser} from "../../actions/registerAction"
import FileUploadForm from './FileUploadForm';
import { withRouter } from "react-router-dom"


class RegisterForm extends Component {
  state = {file: null  }

  onFormSubmit = (formValues) => {
    const {createUser} = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for(let key in formValues) {
      formData.append(key, formValues[key])
    }
    createUser(formData)
    .then(() => this.props.history.push("/admin/profile"))
    
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  onFormChange(name, event) {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const {handleSubmit, chapters} = this.props
    return (  
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <Field name="email" component="input" type="text" onChange={(event) => this.onFormChange('email', event)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <Field name="password" component="input" type="password" onChange={(event) => this.onFormChange('password', event)}/>
        </div>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <Field name="name" component="input" type="text" onChange={(event) => this.onFormChange('name', event)}/>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
        </div>
        <div>
          <Field name="bio" component="textarea" type="text" onChange={(event) => this.onFormChange('bio', event)}/>
        </div>
        <div>
          <label htmlFor="website">Website</label>
        </div>
        <div>
          <Field name="website" component="input" type="text" onChange={(event) => this.onFormChange('website', event)}/>
        </div>
        <div>
          <label htmlFor="chapter">Chapter</label>
        </div>
        <div>
          <Field name="chapter" component="select" >
            {chapters.map(chapter =>
              <option value={chapter._id}>{chapter.city}</option>
            )}
          </Field>
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
        </div>
        <div>
          <Field name="avatar" component={FileUploadForm} type="file" handleFileUpload={this.handleFileUpload}/>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }
}

const wrappedRegisterForm = reduxForm({
  form: "register"
})(RegisterForm);


const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user,
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { createUser })(withRouter(wrappedRegisterForm))
