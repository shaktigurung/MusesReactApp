import React, { Component } from 'react';
import {connect} from "react-redux";
// import simpleAction from "./actions/simpleAction";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from "./components/pages/HomePage";
import Resource from "./components/pages/ResoursePage";
import Contact from "./components/pages/ContactPage";
import AdminPage from "./components/pages/AdminPage"
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
            <Link to="/"> Home </Link>
            <Link to="/resource"> Resource </Link>
            <Link to="/contact"> Contact </Link>
            <Route exact path="/" component= {Home} />
            <Route exact path="/resource" component= {Resource} />
            <Route exact path="/contact" component= {Contact} />
            <Route path="/admin" render={(props) => {
              return <AdminPage {...props} />
            }} />
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
  token: state.auth.token
});

//  const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
//  });

 export default connect(mapStateToProps)(App);
