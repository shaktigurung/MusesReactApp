import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import { refreshUser } from './actions/registerAction';
import { getEvents } from "./actions/eventActions";
import { getSponsors } from "./actions/sponsorAction";
import { getResources } from "./actions/resourceAction";
import { getChapters } from "./actions/chapterActions";
import { getNews } from "./actions/newsActions";
import HomePage from "./components/pages/HomePage";
import AdminPage from "./components/pages/AdminPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import EventsPage from "./components/pages/EventsPage";
import SingleEventPage from "./components/pages/SingleEventPage";
import NewsPage from "./components/pages/NewsPage";
import ResourcesPage from "./components/pages/ResourcesPage";
import ContactPage from "./components/pages/ContactPage";
import SponsorsPage from "./components/structure/SponsorsPage";
import UnauthorizedPage from './components/pages/UnauthorizedPage';
import ErrorPage from './components/pages/ErrorPage';
import './App.css';
import Header from './components/structure/Header';
import Footer from './components/structure/Footer';
import dotenv from "dotenv"
dotenv.config()


class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  componentDidMount = async() => {
    const {refreshUser, getSponsors, getResources, getEvents, getChapters, getNews} = this.props;
    const token = sessionStorage.getItem("token");
    
    try {
      if (token) {
        await refreshUser(token);
      }
      await getSponsors();
      await getResources();
      await getEvents();
      await getChapters();
      await getNews();
    } catch (err) {
      console.log(err);
    }
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
                <Route exact path="/events/:id" component={SingleEventPage} />
                <Route exact path="/news" component={NewsPage} />
                <Route exact path="/resources" component={ResourcesPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/sponsors" component={SponsorsPage} />
                <Route exact path="/unauthorized" component={UnauthorizedPage} />
                <Route exact path="/error" component={ErrorPage} />
                <Route path="/admin" render={(props) => {
                  return <AdminPage {...props} />
                }} />
              </div>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  resources: state.resources,
  sponsors: state.sponsors,
  events: state.events,
  chapters: state.chapters,
  alert: state.alert
});

export default connect(mapStateToProps, {
  refreshUser,
  getSponsors,
  getResources,
  getEvents,
  getChapters,
  getNews
})(App);
