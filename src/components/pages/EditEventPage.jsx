import React, { Component } from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { editEvent } from "./../../actions/eventActions";
import EventForm from "./../forms/EventForm";

class EditEventPage extends Component {
  state = { file: null }

  onFormSubmit = formValues => {
    const {events, token, editEvent} = this.props
    const event = events.filter(event => event._id === this.props.match.params.id)

    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])

    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    console.log(formValues)

    editEvent(formData, token, event[0]._id)
      .then(() => this.props.history.push("/events/"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    const event = this.props.events.filter(event => event._id === this.props.match.params.id)
    return <EventForm 
      onFormSubmit={this.onFormSubmit} 
      handleFileUpload={this.handleFileUpload} 
      event={event[0]}
    />
  }
}
function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors,
      token: state.auth.token
    }
}
export default connect(mapStateToProps, {editEvent})(withRouter(EditEventPage));


//this.props.match.params.id