
import React, { Component } from 'react';
import {connect} from "react-redux";
import { Container, Row , Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, CardGroup} from 'reactstrap';
import {withRouter, Link} from "react-router-dom";
import {editEvent, deleteEvent} from "./../../actions/eventActions";
//import EditEventPage from './EditEventPage';
import './../../App.css';

class EventsPage extends Component {
  
  state={
    events: []
  };

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
    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge className="muses-primary">Page</Badge></h1>
            <Row><h2 style = {mainCenter}> Upcoming  <Badge className="muses-secondary" >Events</Badge></h2></Row>
            <Row>
                
                {this.futureEvents().map(event => 
                <Col xs="4" className="mt-3" key={event._id}>
                  <CardGroup>
                    <Card>
                      <CardImg top width="100%" src={event.image} alt="Card image cap" />
                      <CardBody>
                        <CardTitle> Event Name:{event.title} </CardTitle>
                        <CardSubtitle> Location:{event.location} </CardSubtitle>
                        <CardSubtitle> Date:{event.date} </CardSubtitle>
                        <CardSubtitle> Sponsors:{event.sponsors.map(sponsor=>sponsor.name)}</CardSubtitle>
                        <CardSubtitle> Chapter:{event.chapter.city}</CardSubtitle>
                        <CardText>Description:{event.description.substr(0,50)} </CardText>
                        <Button className="muses-primary" onClick = {()=> this.handleClick(event._id)} > More info</Button>
                        <Link to={`./events/edit/${event._id}`}> <Button className="muses-secondary"> Edit </Button> </Link>
                        <Button className="muses-tertiary" onClick = {()=> this.handleClickDelete(event._id)} > Delete </Button>
                       
                      </CardBody>
                    </Card> 
                  </CardGroup>
                </Col>
                )}
            </Row>
            <Row> <h2 style = {mainCenter} className="mt-3"> Past  <Badge className="muses-tertiary">Events</Badge></h2></Row>
            <Row>
                {this.pastEvents().map(event => 
                <Col xs="4" className="mt-3" key={event._id}>
                <CardGroup>
                  <Card>
                    <CardImg top width="100%" src={event.image} alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Event Name:{event.title} </CardTitle>
                      <CardSubtitle> Location:{event.location} </CardSubtitle>
                      <CardSubtitle> Date:{event.date} </CardSubtitle>
                      <CardSubtitle> Sponsors:{event.sponsors.map(sponsor=>sponsor.name)}</CardSubtitle>
                      <CardSubtitle> Chapter:{event.chapter.city}</CardSubtitle>
                      <CardText>Description:{event.description.substr(0,50)} </CardText>
                      <Button className="muses-primary" onClick = {()=> this.handleClick(event._id)}> More info</Button>
                      <Link to={`./events/edit/${event._id}`}> <Button className="muses-secondary"> Edit </Button> </Link>
                      <Button className="muses-tertiary" onClick = {()=> this.handleClickDelete(event._id)} > Delete </Button>
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
      token: state.auth.token
    }
}

export default connect(mapStateToProps, {editEvent, deleteEvent})(withRouter(EventsPage));