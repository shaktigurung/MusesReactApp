import React, { Component } from "react";
// import homeImage from "./../images/typing.jpg";
import logoImage from "./../images/logo.svg";
import ReactRotatingText from "react-rotating-text";
import "../structure/ReactRotatingText.css";

class HomePage extends Component {
  render() {
    return (
      <div style={{ fontSize: '30px' }}>
        {/* <img src={homeImage} style={{ width: "70%" }} /> */}
        <img src={logoImage} alt="logo" style={{ width: "40%" }} />
        <p style={{ color: "#7985F0", fontSize: "20px" }}>
          Muses run free JavaScript and Node.js workshops for women, non-binary and trans folk around Australia.
        </p>
        <p style={{ color: "#7985F0", fontSize: "20px" }}>
          We are a community of people who learn together.
        </p>
        <h1>Code with us in</h1>
        <div style={{ fontSize: '60px' }}>
          <ReactRotatingText items={["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Darwin"]} color="#DA3296" />
        </div>
      </div>
    );
  }
}

export default HomePage;