import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../HomePage"
import FileUploadForm from "../../forms/FileUploadForm"

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Welcome to Muses Code Js!</h1>
        <FileUploadForm />
        {/* <BrowserRouter>
          <div>
            <Route path="/" component={HomePage} />
            <Route path="/" component={HomePage} />
            <Route path="/" component={HomePage} />

          </div>
        </BrowserRouter> */}
      </header>
    )
  }
}

export default Header;