import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import EditEventForm from "./../forms/EditEventForm";

class EditEventPage extends Component {

  
  // getEvent(id){
  //   const event = this.props.events.filter(event => event._id === id)
  //   console.log(event);
  // }
   
  render() {
    const event = this.props.events.filter(event => event._id == this.props.match.params.id)
    return <EditEventForm event={event[0]}/>
  }
}
function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors
    }
}
export default connect(mapStateToProps)(withRouter(EditEventPage));


//this.props.match.params.id