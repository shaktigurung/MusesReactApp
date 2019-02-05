import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { connect } from "react-redux"
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage';
import ProfilePage from './ProfilePage';
import SingleEventPage from "./SingleEventPage";
import CreateEventPage from "./CreateEventPage";
import EditEventPage from "./EditEventPage";
import EditUserPage from "./EditUserPage";
import CreateResourcePage from "./CreateResourcePage";
import CreateSponsorPage from './CreateSponsorPage';
import CreateNewsPage from './CreateNewsPage';
import EditNewsPage from "./EditNewsPage";
import EditChapterPage from "./EditChapterPage";

class AdminPage extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter >

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

          <Route exact path="/admin/profile" component={ProfilePage} />
          <Route exact path="/admin/resources/create" component={CreateResourcePage} />
          <Route exact path="/admin/sponsor" component={CreateSponsorPage} />

          <Route exact path="/admin/news/create" component={CreateNewsPage} />
          <Route exact path="/admin/news/edit/:id" component={EditNewsPage} />

          <Route exact path="/admin/events/create" component={CreateEventPage} />
          <Route exact path="/admin/events/:id" component={SingleEventPage} />
          <Route exact path="/admin/events/edit/:id" component={EditEventPage} />

          <Route exact path="/admin/chapter" component={EditChapterPage} />
        </div>
      </BrowserRouter >

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