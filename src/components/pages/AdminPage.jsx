import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from "react-redux"
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage';
import ProfilePage from './ProfilePage'
import CreateResourcePage from "./CreateResourcePage";
import CreateSponsorPage from './CreateSponsorPage';
import EditChapterPage from "./EditChapterPage";

class AdminPage extends Component {
  state = {}
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
        <Route exact path="/admin/createResource" component={CreateResourcePage} />
        <Route exact path="/admin/sponsor" component={CreateSponsorPage} />
        <Route exact path="/admin/chapter/edit" component={EditChapterPage} />
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