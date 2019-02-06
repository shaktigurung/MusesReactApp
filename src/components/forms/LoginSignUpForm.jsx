import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import {loginUser} from "../../actions/registerAction"
import { withRouter} from "react-router-dom";
import logoImage from "./../images/logo.svg";
import axios from "axios";
import RegisterPage from "../pages/RegisterPage";
import { Container , Col} from "reactstrap";
import "./../../css/LoginSignUp.css";


class LoginSignUpForm extends Component {
  state = { email: null, password: null }

  onFormSubmit = (event) => {
    const { email, password } = this.state
    this.props.loginUser({email, password})
      .then(this.props.history.push("/admin/dashboard"))
      .catch(err => console.log(err))
  }

  onFormChange(name, event) {
    this.setState({[name]: event.target.value})
  }

  render() {
    const {handleSubmit} = this.props 
    return (  
        <Container>
        
        <Col>
        <form onSubmit={handleSubmit(this.onFormSubmit)}>
            <div className="loginSignUp">
            <p className="tip"> 
                <img src={logoImage} alt="logo" />
            </p>
            <div className="cont">
                <div className="form sign-in">
                  <div className="welcome"><h2>Welcome back,</h2></div>
                  <label>
                      <span>Email</span>
                      <Field name="email" component="input" type="text" onChange={(event) => this.onFormChange('email', event)} />
                  </label>
                  <label>
                      <span>Password</span>
                      <Field name="password" component="input" type="password" onChange={(event) => this.onFormChange('password', event)} />
                  </label>
                  <p className="forgot-pass">Forgot password?</p>
                  <div className="loginSignUp"> 
                      <button type="submit" className="submit">Log In</button>   
                  </div>
                  <div>
                      <RegisterPage />
                  </div>
                  </div>
                </div>
            </div>
        </form>
        </Col>
    
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user
  }
}

const wrappedLoginSignUpForm = reduxForm({
  form: "login"
})(LoginSignUpForm)

export default connect(mapStateToProps, {
  loginUser
})(withRouter(wrappedLoginSignUpForm));


