import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import {setAuthToken} from "../../actions/registerAction"
import { withRouter } from "react-router-dom"
import axios from "axios"

class LoginForm extends Component {
  state = { email: null, password: null }

  onFormSubmit = (event) => {
    const { email, password } = this.state
    axios.post("http://localhost:3000/auth/login", { email, password })
      .then(response => {
        this.props.setAuthToken(response.data)
        this.props.history.push("/admin/profile")
      })
      .catch(err => console.log(err))
  }

  onFormChange(name, event) {
    this.setState({[name]: event.target.value})
  }

  render() {
    const {handleSubmit} = this.props 
    return (  
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" onChange={(event) => this.onFormChange('email', event)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password" onChange={(event) => this.onFormChange('password', event)} />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user
  }
}

const wrappedLoginForm = reduxForm({
  form: "login"
})(LoginForm)

export default connect(mapStateToProps, {
  setAuthToken
})(withRouter(wrappedLoginForm));