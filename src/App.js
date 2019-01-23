import React, { Component } from 'react';
import { connect } from "react-redux";
import simpleAction from "./actions/simpleAction";
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import {refreshUser} from './actions/registerAction';
import HomePage from "./components/pages/HomePage";
import AdminPage from "./components/pages/AdminPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import EventsPage from "./components/pages/EventsPage";
import NewsPage from "./components/pages/NewsPage";
import ResourcesPage from "./components/pages/ResourcesPage";
import ContactPage from "./components/pages/ContactPage";
import SingleEventPage from "./components/pages/SingleEventPage";
import CreateEventPage from "./components/pages/CreateEventPage";
import SponsorsPage from "./components/structure/SponsorsPage";
import './App.css';
import Header from './components/structure/Header';
import dotenv from "dotenv"
dotenv.config()


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }


  componentDidMount = async() => {
    const {refreshUser} = this.props
    const token = sessionStorage.getItem("token")
    if (token) {
      await refreshUser(token)
    } else {
      console.log("error")
    }
  }

  render() {
    const { token } = this.props
    return (
      <div className="App">
        {token && <h4>User Logged In</h4>}
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/aboutus" component={AboutUsPage} />
              <Route exact path="/events" component={EventsPage} />
              <Route exact path="/create" component={CreateEventPage} />
              <Route exact path="/events/:id" component={SingleEventPage} />
              <Route exact path="/news" component={NewsPage} />
              <Route exact path="/resources" component={ResourcesPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/sponsors" component={SponsorsPage} />
              <Route path="/admin" render={(props) => {
                return <AdminPage {...props} />
              }} />
            </div>
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
  token: state.auth.token,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, {refreshUser})(App);
