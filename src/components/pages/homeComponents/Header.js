import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome to Muses Code Js!</h1>
        <BrowserRouter>
          <div>
            <Route path="/" component={home} />
            <Route path="/" component={home} />
            <Route path="/" component={home} />

          </div>
        </BrowserRouter>
      </header>
    )
  }
}

export default Header;