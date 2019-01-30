import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {getSponsors} from "./../../actions/sponsorAction";
import {getChapters} from "./../../actions/chapterActions";
import FileUploadForm from './FileUploadForm';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {createEvent} from "./../../actions/eventActions";
import {
  Container, Col, Form,
  FormGroup, Label,
  Button,
} from 'reactstrap';
require('dotenv').config();

class CreateEventForm extends Component{

  state = {
    sponsors: [],
    chapter: []
  }

  componentDidMount(){
    this.props.getSponsors();
    this.props.getChapters();
  }
   
  onFormSubmit = formValues => {

    let formData = new FormData();
  
    if (this.state.file) {
      formData.append('file', this.state.file[0])
  
    }
    for(let key in formValues) {
      formData.append(key, formValues[key])
    }
    
    this.props.createEvent(formData, this.props.token)
        .then(()=> this.props.history.push("/events"))
        
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render(){
  const { handleSubmit } = this.props
  const {sponsors, chapters} = this.props; 

  return (
    <Container>
      <Form className="form" onSubmit={handleSubmit(this.onFormSubmit)}>
        <Col>
            <FormGroup>
              <Label htmlFor="eventImage"> Event Image</Label>
              <Field name="image" component={FileUploadForm} type="file" handleFileUpload={this.handleFileUpload}/>
            </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="eventTitle"> Event title </Label>
            <Field name="title" component="input" type="text" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="eventDescription"> Description </Label>
            <Field name="description" component="textarea" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="eventLocation"> Location </Label>
            <Field name="location" component="input" type="text" />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="eventDate"> Date </Label>
            <Field name="date" component="input" type="date" />
          </FormGroup>
        </Col>
        <Col>
          <Label> Select Sponsors </Label>
          <FormGroup>
            <Field multiple name="sponsors" component="select">
              {sponsors.map((sponsor) => 
              <option key={sponsor._id} value={sponsor._id}>{sponsor.name}</option>
              )}
            </Field>
          </FormGroup>
        </Col>
        <Col>
          <Label> Select Chapter </Label>
          <FormGroup>
            <Field name="chapter" component="select">
              {chapters.map((chapter) => 
              <option key={chapter._id} value={chapter._id}>{chapter.city}</option>
              )}
            </Field>
          </FormGroup>
        </Col>
        <Col>
          <Label> Event Type </Label>
          <FormGroup>
            <Field name="type" component="select">
              <option />
              <option value="Workshop">Workshop</option>
              <option value="Meetup">Meetup</option>
            </Field>
          </FormGroup>
        </Col>
        <Col>
          <Label> Approved </Label>
          <FormGroup>
            <Field name="approved" component="select">
              <option />
              <option value="true"> Yes </option>
              <option value="false"> No </option>
            </Field>
          </FormGroup>
        </Col>
       
        <Button type="submit"> Submit </Button>
      </Form>
    </Container>
  )
  }
}
const WrappedCreateEventForm = reduxForm({
    // a unique name for the form
    form: 'create',
    destroyOnUnmount: false
})(CreateEventForm)

function mapStateToProps(state){
  return{
    sponsors: state.sponsors,
    chapters: state.chapters,
    token: state.auth.token
  }
}

export default connect(mapStateToProps,{ getSponsors, getChapters, createEvent})(withRouter(WrappedCreateEventForm));