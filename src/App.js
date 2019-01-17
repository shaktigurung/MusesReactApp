import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import {connect} from "react-redux";
// import simpleAction from "./actions/simpleAction";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from "./components/pages/HomePage";
import Resource from "./components/pages/ResoursePage";
import Contact from "./components/pages/ContactPage";
import AdminPage from "./components/pages/AdminPage"
>>>>>>> adminforms
import './App.css';
import dotenv from "dotenv"
dotenv.config()


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  
  render() {
    const {token} = this.props
    return (
      <div className="App">
        {token && <h4>User Logged In</h4>}
        <BrowserRouter>
          <div>
<<<<<<< HEAD
            <Header />
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/aboutus" component={AboutUsPage} />
              <Route exact path="/events" component={EventsPage} />
              <Route exact path="/news" component={NewsPage} />
              <Route exact path="/resource" component={ResourcesPage} />
              <Route exact path="/contact" component={ContactPage} />
            </div>
=======
            <Link to="/"> Home </Link>
            <Link to="/resource"> Resource </Link>
            <Link to="/contact"> Contact </Link>
            <Route exact path="/" component= {Home} />
            <Route exact path="/resource" component= {Resource} />
            <Route exact path="/contact" component= {Contact} />
            <Route path="/admin" render={(props) => {
              return <AdminPage {...props} />
            }} />
>>>>>>> adminforms
          </div>
        </BrowserRouter>

        {/* <h1>Muses</h1>
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
<<<<<<< HEAD
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
=======
  token: state.auth.token
});

//  const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
//  });

 export default connect(mapStateToProps)(App);
>>>>>>> adminforms
