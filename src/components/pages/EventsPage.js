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
    //let day = new Date().getDate();
    // let future = events.filter(function(event){
    //   return event.date > day ;
    //   console.log(event);
    // })
    //console.log(future);
    const eventLeft = {
      textAlign: "left"
    }
    const mainCenter ={
      textAlign: "center"
    }
    return (
        <Container style = {eventLeft}>
            <h1 style = {mainCenter}> Events <Badge color="secondary">Page</Badge></h1>
            <Row>
                 {events.map(event => 
                <Col xs="6" className="mt-3" key={event._id}>
                <CardGroup>
                  <Card>
                    <CardImg top width="100%" src="https://source.unsplash.com/collection/190727/1600x900" alt="Card image cap" />
                    <CardBody>
                      <CardTitle> Title:{event.title} </CardTitle>
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
            <Row>

            </Row>
          </Container>
    );
  }
}

export default EventsPage;