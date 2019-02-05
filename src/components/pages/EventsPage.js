
import React, { Component } from 'react';
import {connect} from "react-redux";
import { Container, Row , Badge, Col} from 'reactstrap';
import {withRouter} from "react-router-dom";
import EventCard from "../structure/EventCard";
import eventbg from "./../images/sydney-profile.jpg";
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
      textAlign: "left",
      marginTop:"30px"
    }
    const mainCenter ={
      textAlign: "center",
      marginTop:"10px"
    }

    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge className="muses-primary">Page</Badge></h1>
            <h2 style = {mainCenter} className="muses-tertiary-text" >Join our events around Australia </h2>
            <Row>
              <Col xs="12">
                <img src={eventbg} alt="mainbg" className="bg effect"  />
              </Col>
            </Row>
            <Row> <h2 style = {eventLeft}> Upcoming  <Badge className="muses-secondary" >Events</Badge></h2></Row>
            <Row>
                <Col xs="12">
                {this.futureEvents().map(eventItem => 
                  <EventCard 
                    handleClickDelete={this.handleClickDelete}
                    handleClick={this.handleClick}
                    handleFileUpload={this.handleFileUpload}
                    onFormSubmit={this.onFormSubmit}
                    eventItem={eventItem}
                    key={eventItem._id}
                  />
                )}
                </Col>
              
            </Row>
            <Row> <h2 style = {mainCenter} className="mt-3"> Past  <Badge className="muses-tertiary">Events</Badge></h2></Row>
            <Row>
                <Col xs="12">
                {this.pastEvents().map(eventItem =>
                  <EventCard
                    handleClickDelete={this.handleClickDelete}
                    handleClick={this.handleClick}
                    handleFileUpload={this.handleFileUpload}
                    onFormSubmit={this.onFormSubmit}
                    eventItem={eventItem}
                    key={eventItem._id}
                  />
                )}
                </Col>
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