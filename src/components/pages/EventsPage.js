
import React, { Component } from 'react';
import {getEvents} from "./../../actions/eventActions";
import {connect} from "react-redux";
import { Container, Row , Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, CardGroup} from 'reactstrap';
 import axios from "axios";
 //require('dotenv').config();
 import {withRouter} from "react-router-dom";

class EventsPage extends Component {
  
  state={
    events: []
  };

  componentDidMount(){
    this.props.getEvents();
  }

  handleClick = (id)=>{
    // alert(`HandleClick is clicked, ${id}`);
     this.props.history.push(`/events/${id}`);
  
  }

  futureEvents = ()=>{
      const {events} = this.props;
      let currentDate = new Date();
     //Future Events
     return events.filter(function(event){
      const eventDate = new Date(event.date);
      return eventDate > currentDate ;
      });
  }

  pastEvents = ()=>{
      const {events} = this.props;
      let currentDate = new Date();
      //Past Events
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
    console.log(this.props)
    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge color="secondary">Page</Badge></h1>
            <Row><h2 style = {mainCenter}> Upcoming  <Badge color="primary">Events</Badge></h2></Row>
            <Row>
                
                 {this.futureEvents().map(event => 
                <Col xs="4" className="mt-3" key={event._id}>
                  <CardGroup>
                    <Card>
                      <CardImg top width="100%" src="https://source.unsplash.com/collection/190727/1600x900" alt="Card image cap" />
                      <CardBody>
                        <CardTitle> Event Name:{event.title} </CardTitle>
                        <CardSubtitle> Location:{event.location} </CardSubtitle>
                        <CardSubtitle> Date:{event.date} </CardSubtitle>
                        <CardSubtitle> Sponsors:{event.sponsors}</CardSubtitle>
                        <CardSubtitle> Chapter:{event.chapter}</CardSubtitle>
                        <CardText>Description:{event.description.substr(0,50)} </CardText>
                        <Button color="info" onClick = {()=> this.handleClick(event._id)} > More info</Button>
                      </CardBody>
                    </Card> 
                   </CardGroup>
                </Col>
                )}
            </Row>
            <Row> <h2 style = {mainCenter} className="mt-3"> Past  <Badge color="danger">Events</Badge></h2></Row>
            <Row>
                 {this.pastEvents().map(event => 
                <Col xs="4" className="mt-3" key={event._id}>
                <CardGroup>
                  <Card>
                    <CardImg top width="100%" src="https://source.unsplash.com/collection/190727/1600x900" alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Event Name:{event.title} </CardTitle>
                      <CardSubtitle> Location:{event.location} </CardSubtitle>
                      <CardSubtitle> Date:{event.date} </CardSubtitle>
                      <CardSubtitle> Sponsors:{event.sponsors}</CardSubtitle>
                      <CardSubtitle> Chapter:{event.chapter}</CardSubtitle>
                      <CardText>Description:{event.description.substr(0,50)} </CardText>
                      <Button color="info" onClick = {()=> this.handleClick(event._id)}> More info</Button>
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
      events: state.events
    }
}

export default connect(mapStateToProps, {getEvents})(withRouter(EventsPage));