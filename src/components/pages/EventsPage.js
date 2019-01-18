import React, { Component } from 'react';
import { Container, Row , Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, CardGroup} from 'reactstrap';
import axios from "axios";
require('dotenv').config();


class EventsPage extends Component {
  
  //Move it to Redux
  state={
    events: []
  };

  getEvents =  async ()=>{
    const events = await axios.get(`${process.env.REACT_APP_BACK_END_DOMAIN}/events`);
    this.setState({ events: events.data});
  }

  componentDidMount(){
    this.getEvents();
  }

  render() {
    const {events} = this.state;
    let currentDate = new Date();

    //Future Events
    const futureEvents = events.filter(function(event){
      const eventDate = new Date(event.date);
      return eventDate > currentDate ;
      });
    //Past Events
    const pastEvents = events.filter(function(event){
      const eventDate = new Date(event.date);
      return eventDate < currentDate ;
      });
      
    // Inline CSS
    const eventLeft = {
      textAlign: "left"
    }
    const mainCenter ={
      textAlign: "center"
    }
    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge color="secondary">Page</Badge></h1>
            <Row><h2 style = {mainCenter}> Upcoming  <Badge color="primary">Events</Badge></h2></Row>
            <Row>
                
                 {futureEvents.map(event => 
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
                      <Button color="info" > More info</Button>
                    </CardBody>
                  </Card> 
                  </CardGroup>
                </Col>
                )}
            </Row>
            <Row> <h2 style = {mainCenter} className="mt-3"> Past  <Badge color="danger">Events</Badge></h2></Row>
            <Row>
                 {pastEvents.map(event => 
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
                      <Button color="info" > More info</Button>
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

export default EventsPage;