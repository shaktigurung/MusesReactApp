import React, { Component } from 'react';
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux"
import {createUser, setAuthToken} from "../../actions/registerAction"
import FileUploadForm from './FileUploadForm';

class RegisterForm extends Component {
  state = {file: null  }

  onFormSubmit = async(formValues) => {
    const {createUser, setAuthToken} = this.props
    let formData = new FormData();
    formData.append('file', this.state.file[0])
    for(let key in formValues) {
      formData.append(key, formValues[key])
    }
    const token = await createUser(formData)
    setAuthToken(token)

    
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    const {handleSubmit} = this.props
    return (  
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <Field name="bio" component="textarea" type="text" />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <Field name="website" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
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
  return {token: state.auth.token}
}

export default connect(mapStateToProps, { createUser, setAuthToken })(wrappedRegisterForm)
