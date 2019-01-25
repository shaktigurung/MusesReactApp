import React, {Component} from 'react';
import CreateEventForm from './../forms/CreateEventForm';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CreateEventPage extends Component {
   
  
  render() {
    return <CreateEventForm />
  }
}

function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors
      //token: state.auth.token
    }
}
export default  connect(mapStateToProps) (withRouter(CreateEventPage));