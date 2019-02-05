
import React, { Component } from 'react';
import {connect} from "react-redux";
import { Container, Row , Badge} from 'reactstrap';
import {withRouter} from "react-router-dom";
import EventCard from "../structure/EventCard"
import {editEvent, deleteEvent} from "./../../actions/eventActions";
import './../../App.css';

class EventsPage extends Component {
  
  state={
    events: [],
    file: null
  };

  onFormSubmit = (formValues, event) => {
    const {token, editEvent } = this.props
    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])

    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    editEvent(formData, token, event._id)
      .then(() => this.props.history.push("/events/"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  handleClick = (id)=>{
    this.props.history.push(`/events/${id}`);
  
  }
  //Delete Event
  handleClickDelete = (id)=>{ 
    let eventId = id;
    this.props.deleteEvent(eventId, this.props.token)
        .then(()=> this.props.history.push("/events/"));
  }

  //Future Events
  futureEvents = ()=>{
      const {events} = this.props;
      let currentDate = new Date();
    
      return events.filter(function(event){
      const eventDate = new Date(event.date);
      return eventDate > currentDate ;
      });
  }

  //Past Events
  pastEvents = ()=>{
      const {events} = this.props;
      let currentDate = new Date();
      
      return events.filter(function(event){
        const eventDate = new Date(event.date);
        return eventDate < currentDate ;
        });
  }

  render() {
      
    // Inline CSS
    const eventLeft = {
      textAlign: "left"
    }
    const mainCenter ={
      textAlign: "center"
    }

    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge className="muses-primary">Page</Badge></h1>
            <Row><h2 style = {mainCenter}> Upcoming  <Badge className="muses-secondary" >Events</Badge></h2></Row>
            <Row>
                
                {this.futureEvents().map(eventItem => 
                  <EventCard 
                    handleClick={this.handleClick}
                    handleFileUpload={this.handleFileUpload}
                    onFormSubmit={this.onFormSubmit}
                    eventItem={eventItem}
                    key={eventItem._id}
                  />
                )}
            </Row>
            <Row> <h2 style = {mainCenter} className="mt-3"> Past  <Badge className="muses-tertiary">Events</Badge></h2></Row>
            <Row>
                {this.pastEvents().map(eventItem =>
                  <EventCard
                    handleClick={this.handleClick}
                    handleFileUpload={this.handleFileUpload}
                    onFormSubmit={this.onFormSubmit}
                    eventItem={eventItem}
                    key={eventItem._id}
                  />
                )}
            </Row>
          </Container>
    );
  }
}


function mapStateToProps(state){
    return{
      events: state.events,
      token: state.auth.token,
      user: state.auth.user
    }
}

export default connect(mapStateToProps, {editEvent, deleteEvent})(withRouter(EventsPage));