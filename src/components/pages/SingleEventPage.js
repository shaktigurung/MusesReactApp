import React, {Component} from 'react';
import {getEvents} from "./../../actions/eventActions";
import {connect} from "react-redux";
import { Container, Row , Col, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge, CardGroup} from 'reactstrap';

class SingleEventPage extends Component{
    
    state={
        events: []
    };

    componentDidMount(){
        this.props.getEvents();
    }

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
          }
        return(
            <Container>
                <h1 style = {mainCenter}> Events <Badge color="secondary">Page</Badge></h1>
                <Row>
                    {this.singleEvent().map(event => 
                    <Col>
                        <CardGroup>
                            <Card>
                            <CardImg top width="100%" src="https://source.unsplash.com/collection/190727/1600x900" alt="Card image cap" />
                            <CardBody>
                                <CardTitle> Event Name:{event.title} </CardTitle>
                                <CardSubtitle> Location:{event.location} </CardSubtitle>
                                <CardSubtitle> Date:{event.date} </CardSubtitle>
                                <CardSubtitle> Sponsors:{event.sponsors}</CardSubtitle>
                                <CardSubtitle> Chapter:{event.chapter}</CardSubtitle>
                                <CardText>Description:{event.description} </CardText>  
                            </CardBody>
                            </Card> 
                        </CardGroup>
                    </Col> )}
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
export default connect(mapStateToProps,{getEvents})(SingleEventPage);


