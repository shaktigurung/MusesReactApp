import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import {connect} from "react-redux"
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage';
import ProfilePage from './ProfilePage'


class AdminPage extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Route exact path="/admin/login" render={(props) => {
          return <LoginPage {...props} />
        }} />
        <Route exact path="/admin/register" render={(props) => {
          return <RegisterPage {...props} />
        }} />
        {/* <Route exact path="/admin/profile" render={(props) => {
          return <ProfilePage {...props} />
        }} /> */}
        <Route exact path="/admin/profile" component={ProfilePage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  }
}


export default connect(mapStateToProps)(AdminPage);