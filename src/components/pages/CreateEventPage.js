import React, {Component} from 'react';
import CreateEventForm from './../forms/CreateEventForm';
import {createEvent} from "./../../actions/eventActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CreateEventPage extends Component {
    state={
            events: [],
           
    };
    
  onFormSubmit = values => {
    // print the form values to the console
    
    this.props.createEvent(values, this.props.token)
        .then(()=> this.props.history.push("/events"))
        
    console.log(values);
    //console.log("event created");
  }
  render() {
    return <CreateEventForm onSubmit={this.onFormSubmit} />
  }
}

function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors,
      token: state.auth.token
    }
}
export default  connect(mapStateToProps, {createEvent}) (withRouter(CreateEventPage));