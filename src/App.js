import React, { Component } from 'react';
import { connect } from "react-redux";
import simpleAction from "./actions/simpleAction";
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import Resource from "./components/pages/ResoursePage";
import Contact from "./components/pages/ContactPage";
import './App.css';
import Header from './components/structure/Header';


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/resource" component={Resource} />
              <Route exact path="/contact" component={Contact} />
            </div>
          </div>
        </BrowserRouter>
        {/* <Home/>
        <h1>Muses</h1>
        <button onClick={this.simpleAction}>Test Redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre> */}
      </div>
    );
  }
}



const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
