import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from "react-redux"
import LoginPage from "./LoginPage"
import RegisterPage from './RegisterPage';


class AdminPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <Route exact path="/admin/login" component={LoginPage} />
        <Route exact path="/admin/register" component={RegisterPage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}


export default connect(mapStateToProps)(AdminPage);