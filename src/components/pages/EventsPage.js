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
    console.log(events);
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
        {events.map(event => <li key={event._id}>{event.title}</li>)}
        {/* <p>{allevent}</p> */}
      </div>
    );
  }
}

export default EventsPage;