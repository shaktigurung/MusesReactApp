import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, Button} from 'reactstrap';
import './../../App.css';

class ProfilePage extends Component {
  state = {}
  render() {
    const { user } = this.props
    if (user) {
      return (
        <div>
          <Container>
            <Row>
              <Col xs="4"></Col>
              <Col xs="4">
                  <h1> <Badge className="muses-primary">Profile</Badge> </h1> 
              </Col>
              <Col xs="4"></Col>   
            </Row>
            <Row>
                <Col xs="4">
                  <Card>
                    <CardImg top src={user.image} alt={`${user.name}'s avatar`} />
                  </Card>
                </Col>
                <Col xs="8">
                    
                    <Card>
                      <CardBody>
                        <CardTitle> Username : {user.name}</CardTitle>
                        <CardSubtitle> Website: {user.website}</CardSubtitle>
                        <CardText> Bio: {user.bio}</CardText>
                        <Link to="/admin/auth/edit"><Button className="muses-tertiary">Edit Profile</Button></Link>
                      </CardBody>
                    </Card>
                 
                  <Row><h4>Please select the following options</h4></Row>
                  <Row>
                      <Col xs="4">
                          <Link to="/admin/events/create"> <Button className="muses-secondary" style={{margin: "20px"}}> Event</Button></Link>
                      </Col>
                      <Col xs="4">
                          <Link to="/admin/news/create"> <Button className="muses-secondary" style={{marginTop: "20px"}}> News</Button></Link>
                      </Col>
                      <Col xs="4">
                          <Link to="/admin/post/create"> <Button className="muses-secondary" style={{marginTop: "20px"}}>  Post</Button></Link>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs="4">
                          <Link to="/admin/chapter"> <Button className="muses-secondary" style={{marginTop: "20px"}}> Chapters</Button></Link>
                      </Col>
                      <Col xs="4">
                          <Link to="/admin/sponsor"> <Button className="muses-secondary" style={{marginTop: "20px"}}> Sponsors </Button></Link>
                      </Col>
                      <Col xs="4">
                          <Link to="/admin/resources/create"><Button className="muses-secondary" style={{marginTop: "20px"}}> Resources</Button></Link>
                      </Col>
                  </Row>
                  <Row></Row>
                </Col>
             </Row>
          </Container>
       </div>

      );
    } else {
      return <h1>Loading</h1>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(ProfilePage);
