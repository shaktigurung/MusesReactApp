import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import EditEventForm from "./../forms/EditEventForm";

class EditEventPage extends Component {
   
  render() {
    return <EditEventForm />
  }
}
function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors
    }
}
export default connect(mapStateToProps)(withRouter(EditEventPage));