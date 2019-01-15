import React, { Component } from 'react';
import {connect} from "react-redux";
import simpleAction from "./actions/simpleAction";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from "./components/pages/Home";
import Resource from "./components/pages/ResoursePage";
import Contact from "./components/pages/ContactPage";
import './App.css';


class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      
      <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/"> Home </Link>
            <Link to="/resource"> Resource </Link>
            <Link to="/contact"> Contact </Link>
            <Route exact path="/" component= {Home} />
            <Route exact path="/resource" component= {Resource} />
            <Route exact path="/contact" component= {Contact} />
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
