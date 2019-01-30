import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from "react-redux"
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage';
import ProfilePage from './ProfilePage';
import EditUserPage from "./EditUserPage";
import CreateResourcePage from "./CreateResourcePage";
import CreateSponsorPage from './CreateSponsorPage';
import CreateNewsPage from './CreateNewsPage';
import EditNewsPage from "./EditNewsPage"



class AdminPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <Route exact path="/admin/auth/login" render={(props) => {
          return <LoginPage {...props} />
        }} />
        <Route exact path="/admin/auth/register" render={(props) => {
          return <RegisterPage {...props} />
        }} />
        <Route exact path="/admin/auth/edit" render={(props) => {
          return <EditUserPage {...props} />
        }} />
        {/* <Route exact path="/admin/profile" render={(props) => {
          return <ProfilePage {...props} />
        }} /> */}
        <Route exact path="/admin/profile" component={ProfilePage} />
        <Route exact path="/admin/createResource" component={CreateResourcePage} />
        <Route exact path="/admin/sponsor" component={CreateSponsorPage} />
        <Route exact path="/admin/news/create" component={CreateNewsPage} />
        <Route exact path="/admin/news/edit" component={EditNewsPage} />
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