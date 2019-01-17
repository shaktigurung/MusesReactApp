import React, { Component } from 'react';
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
    return (
      <div>
        <h1> Events Page </h1>
        {events.map(event => 
          <p key={event._id}> 
              Title: {event.title} <br/>
              Description: {event.description} <br/>
              Location: {event.location}<br/>
              Date: {event.date}<br/>
              Sponsors: {event.sponsors}<br/>
              Chapter: {event.chapter}<br/>
              <br/>
          </p>
          )}
        {/* <p>{allevent}</p> */}
      </div>
    );
  }
}

export default EventsPage;