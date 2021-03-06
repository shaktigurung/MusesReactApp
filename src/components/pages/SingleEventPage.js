import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom"
import { Container, Row , Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge, CardGroup} from 'reactstrap';
import SponsorThumbnail from "../structure/SponsorThumbnail"

class SingleEventPage extends Component{

  singleEvent = ()=>{
    const {match} = this.props;
    const {events} = this.props;
    const id = match.params.id;
  
    return events.filter(function(event){
        return event._id === id
    });
  }

  render(){
    const mainCenter ={
        textAlign: "center"
      };
  
    let event = this.singleEvent()
    event= event[0]
    if (event){
      return(
        <Container>
          <h1 style = {mainCenter}> Events <Badge color="secondary">Page</Badge></h1>
          <Row>
            <Col>
              <CardGroup>
                <Card>
                  <CardImg top width="100%" src={event.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle> Event Name:{event.title} </CardTitle>
                    <CardSubtitle> Location:{event.location} </CardSubtitle>
                    <CardSubtitle> Date:{event.date} </CardSubtitle>
                    <CardSubtitle> Sponsors:{event.sponsors.map(sponsor => <SponsorThumbnail key={sponsor._id} sponsor={sponsor} />)}</CardSubtitle>
                    <CardSubtitle> Chapter:{event.chapter.city}</CardSubtitle>
                    <CardText> Description: <span dangerouslySetInnerHTML={{__html: event.description}}></span> </CardText>  
                    <CardText><Link to={`/admin/edit/${event._id}`}>Edit</Link> </CardText>  
                  </CardBody>
                </Card> 
              </CardGroup>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return null
    }
  }
}

function mapStateToProps(state){
    return{
      events: state.events,
      sponsors: state.sponsors
    }
}
export default connect(mapStateToProps)(SingleEventPage);


