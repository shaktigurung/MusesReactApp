import React from 'react';
import {connect} from "react-redux"
import {
  Col, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardGroup
} from 'reactstrap';
import EventForm from "../forms/EventForm"
import SponsorThumbnail from "../structure/SponsorThumbnail"


const EventCard = (props) => {
  const {eventItem, user, handleClick, handleClickDelete, handleFileUpload, onFormSubmit} = props
  return (
    <Col xs="4" className="mt-3" key={eventItem._id}>
      <CardGroup>
        <Card>
          <CardImg top width="100%" src={eventItem.image} alt="Card image cap" />
          <CardBody>
            <CardTitle> Event Name:{eventItem.title} </CardTitle>
            <CardSubtitle> Location:{eventItem.location} </CardSubtitle>
            <CardSubtitle> Date: {new Date(eventItem.date).toDateString()} </CardSubtitle>
            {/* <CardSubtitle> Sponsors:{eventItem.sponsors.map(sponsor => sponsor.name)}</CardSubtitle> */}
            <CardSubtitle> Sponsors:{eventItem.sponsors.map(sponsor => <SponsorThumbnail key={sponsor._id} sponsor={sponsor} />)}</CardSubtitle>
            <CardSubtitle> Chapter:{eventItem.chapter.city}</CardSubtitle>
            {/* <CardText>Description:{eventItem.description.substr(0,50)} </CardText> */}
            <CardText>Description: <span dangerouslySetInnerHTML={{ __html: eventItem.description }}></span></CardText>
            <Button className="muses-primary" onClick={() => handleClick(eventItem._id)} > More info</Button>
            {/* <Link to={`/admin/events/edit/${eventItem._id}`}> <Button color="primary"> Edit </Button> </Link> */}
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
          </CardBody>
        </Card>
      </CardGroup>
    </Col>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(EventCard)