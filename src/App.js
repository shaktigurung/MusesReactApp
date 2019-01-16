import React, { Component } from 'react';
import { connect } from "react-redux";
import simpleAction from "./actions/simpleAction";
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import EventsPage from "./components/pages/EventsPage";
import NewsPage from "./components/pages/NewsPage";
import ResourcesPage from "./components/pages/ResourcesPage";
import ContactPage from "./components/pages/ContactPage";
import './App.css';
import Header from './components/structure/Header';
import './App.css';
require('dotenv').config()


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
              <Route exact path="/aboutus" component={AboutUsPage} />
              <Route exact path="/events" component={EventsPage} />
              <Route exact path="/news" component={NewsPage} />
              <Route exact path="/resource" component={ResourcesPage} />
              <Route exact path="/contact" component={ContactPage} />
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
