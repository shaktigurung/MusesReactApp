import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {createUser} from "../../actions/registerAction"
import FileUploadForm from './FileUploadForm';
import { withRouter } from "react-router-dom";
import {renderField, email, required} from "../../services/formValidation"


class UserForm extends Component {

  onFormChange(name, event) {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { handleSubmit, chapters, onFormSubmit, handleFileUpload} = this.props
    const user = this.props.initialValues
    if (chapters) { 
      return (  
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div>
            <Field 
              name="email" 
              component={renderField} 
              type="text" 
              label="Email" 
              validate={[email, required]} 
              onChange={(event) => this.onFormChange('email', event)}
            />
          </div>
          <div>
            <Field 
              name="password" 
              component={renderField} 
              type="password" 
              label="Password" 
              validate={[required]} 
              onChange={(event) => this.onFormChange('password', event)}
            />
          </div>
          <div>
            <Field 
              name="name" 
              component={renderField} 
              type="text" 
              label="Full Name" 
              validate={[required]} 
              onChange={(event) => this.onFormChange('name', event)}
            />
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
          </div>
          <div>
            <Field 
              name="bio" 
              component="textarea" 
              type="text" 
              label="Bio" 
              onChange={(event) => this.onFormChange('bio', event)}
            />
          </div>
          <div>
            <Field 
              name="website" 
              component={renderField} 
              type="text" 
              label="Website" 
              onChange={(event) => this.onFormChange('website', event)}
            />
          </div>
          <div>
            <label htmlFor="chapter">Chapter</label>
          </div>
          <div>
            <Field 
              name="chapter" 
              component="select" >
              {chapters.map(chapter =>
                <option key={chapter._id} value={chapter._id}>{chapter.city}</option>
              )}
            </Field>
          </div>
          <div>
            <label htmlFor="avatar">Avatar</label>
          </div>
          <div>
            {user &&
            <img src={user["avatar"]} alt={`${user["name"]}'s avatar`}/>}
          </div>
          <div>
            <Field 
              name="avatar" 
              component={FileUploadForm} 
              type="file" 
              handleFileUpload={handleFileUpload}/>
          </div>
          <div>
            <button type="submit">{this.props.formType}</button>
          </div>
        </form>
      );
    } else {
      return null
    }
  }
}

const wrappedUserForm = reduxForm({
  form: "user",
  enableReinitialize: true
})(UserForm);


const mapStateToProps = (state) => {
  const {...initialValues} = state.auth.user
  const { token } = state.auth;
  return {
    token,
    initialValues,
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { createUser })(withRouter(wrappedUserForm))
