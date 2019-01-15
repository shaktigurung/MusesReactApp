import React, { Component } from "react";
import homeImage from "./../images/typing.jpg";
import ReactRotatingText from "react-rotating-text";
import "../structure/ReactRotatingText.css";

class HomePage extends Component {
  render() {
    return (
      <div style={{ fontSize: '30px' }}>
        <img src={homeImage} style={{ width: "80%" }} />
        <h1>Code with us in</h1>
        <div style={{ fontSize: '60px' }}>
          <ReactRotatingText items={["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin"]} color="#DA3296" />
        </div>
      </div>
    );
  }
}

export default HomePage;