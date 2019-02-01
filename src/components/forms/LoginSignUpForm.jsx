import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import {setAuthToken} from "../../actions/registerAction"
import { withRouter, Link } from "react-router-dom";
import logoImage from "./../images/logo.svg";
import {Button} from "reactstrap";
import axios from "axios";
import "./../../css/LoginSignUp.css";

class LoginSignUpForm extends Component {
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
                <Link to="/admin/auth/register"> <Button type="button" className="submit" style={{marginTop:"5px"}}> Sign Up</Button> </Link>
                </div>
                </div>
                <div className="sub-cont">
                    <div className="img">
                    <div className="img__text m--up">
                    <h2>New here?</h2>
                    <p>Sign up and discover great amount of new opportunities!</p>
                    </div>
                    <div className="img__text m--in">
                    <h2>One of us?</h2>
                    <p>If you already has an account, just sign in. We've missed you!</p>
                    </div>
                </div>
                
                </div>
            </div>
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

const wrappedLoginSignUpForm = reduxForm({
  form: "login"
})(LoginSignUpForm)

export default connect(mapStateToProps, {
  setAuthToken
})(withRouter(wrappedLoginSignUpForm));


