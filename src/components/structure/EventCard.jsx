import React from 'react';
import {connect} from "react-redux"
import {
   Button, 
   CardSubtitle
} from 'reactstrap';
import EventForm from "../forms/EventForm"
import SponsorThumbnail from "../structure/SponsorThumbnail"



const EventCard = (props) => {
  const {eventItem, user, handleClick, handleClickDelete, handleFileUpload, onFormSubmit} = props
  return (
    <div className="event-container">
      {/* <CardImg className="eventImage" src={eventItem.image} alt="Card image" /> */}
      <div className="chapter"> {eventItem.chapter.city} </div>
      <h5 className="event-container__header"> {new Date(eventItem.date).toDateString()} </h5>
      <h5 className="header time">
          <span className="inline-clock-icon">
              <svg width="11" height="11" viewBox="0 0 11 11"><path
                d="M5.4 0C2.4 0 0 2.4 0 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4S8.4 0 5.4 0zm3 6.8H4.7V1.7h.7L6 5.4l2.4.6v.8z"></path></svg>
          </span>
          10:00 - 16:00
      </h5>
      <div className="more-info" > <Button className="muses-primary" onClick={() => handleClick(eventItem._id)} > More info</Button> </div>
     
      <div className="event">
          <div className="title">
               <p>
                  <span>{eventItem.title} </span> at <span> {eventItem.location} </span>
               </p>
          </div>

          <p className="flow-text">
              <span dangerouslySetInnerHTML={{ __html: eventItem.description }}></span>
          </p>

          <div className="row">
              <div className="col m6 sponsors-container">
                  <CardSubtitle>{eventItem.sponsors.map(sponsor => <SponsorThumbnail sponsor={sponsor} />)}</CardSubtitle>
              </div>
          </div>
      </div>
      {user && <EventForm
                  key={eventItem._id}
                  onFormSubmit={onFormSubmit}
                  handleFileUpload={handleFileUpload}
                  eventItem={eventItem}
                  buttonLabel="Edit"
                  className={eventItem._id}
                />}
      {user &&
      <Button className="muses-tertiary" onClick={() => handleClickDelete(eventItem._id)} > Delete </Button>}
    </div>   
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(EventCard)