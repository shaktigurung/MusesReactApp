import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge} from 'reactstrap';
import UserForm from "../forms/UserForm"
import {createEvent} from "../../actions/eventActions"
import {createNews} from "../../actions/newsActions"
import {updateUser} from "../../actions/registerAction";
import './../../App.css';

class ProfilePage extends Component {
  state = { file: null }

  onUserFormSubmit = async(formValues) => {
    const { updateUser, token } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    await updateUser(formData, token)
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
                        <UserForm
                          handleFileUpload={this.handleFileUpload}
                          onFormSubmit={this.onUserFormSubmit}
                          buttonLabel="Edit Profile"
                          formType="Edit"
                        />
                      </CardBody>
                    </Card>
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
