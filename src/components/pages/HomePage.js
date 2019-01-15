import React, { Component } from 'react';
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

export default Home;

