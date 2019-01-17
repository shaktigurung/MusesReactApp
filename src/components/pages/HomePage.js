import React, { Component } from 'react';
import {connect} from "react-redux"
import Navbar from "./homeComponents/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>This is home Page </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Home);

