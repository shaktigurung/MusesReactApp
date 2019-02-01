
import React, { Component } from 'react';
import {connect} from "react-redux";
import { Container, Row , Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, CardGroup} from 'reactstrap';
import {withRouter, Link} from "react-router-dom";
import EventForm from "../forms/EventForm"
import {editEvent, deleteEvent} from "./../../actions/eventActions";
//import EditEventPage from './EditEventPage';
import './../../App.css';

class EventsPage extends Component {
  
  state={
    events: [],
    file: null
  };

  onFormSubmit = (formValues, event) => {
    const { events, token, editEvent } = this.props
    // const event = events.filter(event => event._id === this.props.match.params.id)
    console.log(event)
    console.log(formValues)
    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])

    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    // editEvent(formData, token, event[0]._id)
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
      //console.log(events);
      
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

    const {user} = this.props
    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge className="muses-primary">Page</Badge></h1>
            <Row><h2 style = {mainCenter}> Upcoming  <Badge className="muses-secondary" >Events</Badge></h2></Row>
            <Row>
                
                {this.futureEvents().map(eventItem => 
                <Col xs="4" className="mt-3" key={eventItem._id}>
                  <CardGroup>
                    <Card>
                      <CardImg top width="100%" src={eventItem.image} alt="Card image cap" />
                      <CardBody>
                        <CardTitle> Event Name:{eventItem.title} </CardTitle>
                        <CardSubtitle> Location:{eventItem.location} </CardSubtitle>
                        <CardSubtitle> Date:{eventItem.date} </CardSubtitle>
                        <CardSubtitle> Sponsors:{eventItem.sponsors.map(sponsor=>sponsor.name)}</CardSubtitle>
                        <CardSubtitle> Chapter:{eventItem.chapter.city}</CardSubtitle>
                        <CardText>Description:{eventItem.description.substr(0,50)} </CardText>
                        <Button className="muses-primary" onClick = {()=> this.handleClick(eventItem._id)} > More info</Button>
                        {/* <Link to={`/admin/events/edit/${eventItem._id}`}> <Button color="primary"> Edit </Button> </Link> */}
                          {user && <EventForm
                            key={eventItem._id}
                            onFormSubmit={this.onFormSubmit}
                            handleFileUpload={this.handleFileUpload}
                            eventItem={eventItem}
                            buttonLabel="Edit"
                            className={eventItem._id}
                          />}
                        {user &&
                          <Button className="muses-tertiary" onClick = {()=> this.handleClickDelete(eventItem._id)} > Delete </Button>}
                      </CardBody>
                    </Card> 
                  </CardGroup>
                </Col>
                )}
            </Row>
            <Row> <h2 style = {mainCenter} className="mt-3"> Past  <Badge className="muses-tertiary">Events</Badge></h2></Row>
            <Row>
                {this.pastEvents().map(eventItem => 
                <Col xs="4" className="mt-3" key={eventItem._id}>
                <CardGroup>
                  <Card>
                    <CardImg top width="100%" src={eventItem.image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle> EventItem Name:{eventItem.title} </CardTitle>
                      <CardSubtitle> Location:{eventItem.location} </CardSubtitle>
                      <CardSubtitle> Date:{eventItem.date} </CardSubtitle>
                      <CardSubtitle> Sponsors:{eventItem.sponsors.map(sponsor=>sponsor.name)}</CardSubtitle>
                      <CardSubtitle> Chapter:{eventItem.chapter.city}</CardSubtitle>
                      <CardText>Description:{eventItem.description.substr(0,50)} </CardText>
                      <Button className="muses-primary" onClick = {()=> this.handleClick(eventItem._id)}> More info</Button>
                      {/* <Link to={`/admin/eventItems/edit/${eventItem._id}`}> <Button color="primary"> Edit </Button> </Link> */}
                      {user &&
                        <EventForm
                          key={eventItem._id}
                          onFormSubmit={this.onFormSubmit}
                          handleFileUpload={this.handleFileUpload}
                          eventItem={eventItem}
                          buttonLabel="Edit"
                          className={eventItem._id}
                        />}
                      {user &&
                        <Button className="muses-tertiary" onClick = {()=> this.handleClickDelete(eventItem._id)} > Delete </Button>}
                    </CardBody>
                  </Card> 
                  </CardGroup>
                </Col>
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