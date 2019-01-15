import React, { Component } from 'react';
import {connect} from "react-redux";
import simpleAction from "./actions/simpleAction";
import Home from "./components/pages/home";
import './App.css';


class App extends Component {
  
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      
      <div className="App">
        <Home/>
        <h1>Muses</h1>
        <button onClick={this.simpleAction}>Test Redux action</button>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
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
