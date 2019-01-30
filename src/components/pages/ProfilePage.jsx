import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                  <CardImg top src={user.avatar} alt={`${user.name}'s avatar`} />
                  <CardBody>
                    <CardTitle> Username : {user.name}</CardTitle>
                    <CardSubtitle> Website: {user.website}</CardSubtitle>
                    <CardText> Bio: {user.bio}</CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="2">
                <Button>New Event</Button>
              </Col>
              <Col xs="2">
                <Button>New News</Button>
              </Col>
              <Col xs="2">
                <Button>New Post</Button>
              </Col>
              <Col xs="2">
                <Button>Resources</Button>
              </Col>
            </Row>
            <Row></Row>
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
