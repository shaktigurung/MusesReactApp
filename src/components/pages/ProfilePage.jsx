import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link} from "react-router-dom";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, Button} from 'reactstrap';
import EventForm from "../forms/EventForm"
import NewsForm from "../forms/NewsForm"
import UserForm from "../forms/UserForm"
import {createEvent} from "../../actions/eventActions"
import {createNews} from "../../actions/newsActions"
import {updateUser} from "../../actions/registerAction"
import './../../App.css';

class ProfilePage extends Component {
  state = { file: null }

  onEventFormSubmit = (formValues) => {
    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }

    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    this.props.createEvent(formData, this.props.token)
      .then(() => this.props.history.push("/events"))
  }

  onNewsFormSubmit = (formValues) => {
    const { createNews, token } = this.props
    const formData = new FormData()
    if (this.state.file) {
      formData.append("file", this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    createNews(formData, token)
      .then(this.props.history.push("/news"))
  }

  onUserFormSubmit = (formValues) => {
    const { updateUser, token } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    updateUser(formData, token)
      .then(this.props.history.push("/admin/profile"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

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
                        <CardText> Bio: <span dangerouslySetInnerHTML={{__html: user.bio}}></span></CardText>
                        {/* <Link to="/admin/auth/edit"><Button className="muses-tertiary">Edit Profile</Button></Link> */}
                        <UserForm
                          handleFileUpload={this.handleFileUpload}
                          onFormSubmit={this.onUserFormSubmit}
                          buttonLabel="Edit Profile"
                          formType="Edit"
                        />
                      </CardBody>
                    </Card>
                  <Row><h4>Please select the following options</h4></Row>
                  <Row>
                      <Col xs="4">
                          {/* <Link to="/admin/events/create"> <Button className="muses-secondary" style={{margin: "20px"}}> Event</Button></Link> */}
                          <EventForm
                            // key={eventItem._id}
                            onFormSubmit={this.onEventFormSubmit}
                            handleFileUpload={this.handleFileUpload}
                            eventItem={null}
                            buttonLabel="Event"
                            // className={eventItem._id}
                          />
                      </Col>
                      <Col xs="4">
                          {/* <Link to="/admin/news/create"> <Button className="muses-secondary" style={{marginTop: "20px"}}> News</Button></Link> */}
                          <NewsForm
                            onFormSubmit={this.onNewsFormSubmit}
                            handleFileUpload={this.handleFileUpload}
                            newsItem={null}
                            buttonLabel="News"
                          />
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
    user: state.auth.user,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, {createEvent, createNews, updateUser})(ProfilePage);
