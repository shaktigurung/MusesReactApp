import React, {Component} from 'react';
import EventForm from '../forms/EventForm';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class CreateEventPage extends Component {
  state = { file: null }

  onFormSubmit = formValues => {

    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])

    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    this.props.createEvent(formData, this.props.token)
      .then(() => this.props.history.push("/events"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    return <EventForm 
      onFormSubmit={this.onFormSubmit} 
      handleFileUpload={this.handleFileUpload}
    />
  }
}

function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors
      //token: state.auth.token
    }
}
export default connect(mapStateToProps) (withRouter(CreateEventPage));