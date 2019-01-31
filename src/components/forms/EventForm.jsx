import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import FileUploadForm from './fields/FileUploadForm';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
  Container, 
  Col, 
  Form,
  FormGroup, 
  Label,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from 'reactstrap';

class EventForm extends Component{
  state = { modal: false}

  handleFormSubmit = (formValues) => {
    const {onFormSubmit, eventItem} = this.props
    console.log(eventItem)
    // console.log(formValues)
    onFormSubmit(formValues, eventItem)
  }

  toggle = () => {
    this.setState({modal: !this.state.modal})
  }

  render(){
  const { handleSubmit, onFormSubmit, handleFileUpload } = this.props
  const {sponsors, chapters, eventItem} = this.props; 

  return (
    <>
      <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
      <Modal 
        isOpen={this.state.modal} 
        toggle={this.toggle} 
        // className={this.props.className}
      >
        <ModalHeader toggle={this.toggle}>Event</ModalHeader>
        <Container>
          <Form className="form" onSubmit={handleSubmit(this.handleFormSubmit)}>
            <ModalBody>
              <Col>
                  <FormGroup>
                    <Label htmlFor="eventImage"> Event Image</Label>
                    <Field name="image" component={FileUploadForm} type="file" handleFileUpload={handleFileUpload}/>
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
                  <Field multiple name="sponsors" component="select" type="select-multiple">
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
            </ModalBody>
            <ModalFooter>
              <Button type="submit"> Submit </Button>
            </ModalFooter>
            </Form>
          </Container>
      </Modal>
    </>
  )
  }
}
const wrappedEventForm = reduxForm({
    // a unique name for the form
    form: 'event',
    enableReinitialize: true,
    destroyOnUnmount: false
})(EventForm)

function mapStateToProps(state, props){
  const { ...initialValues } = props.eventItem
  
  initialValues.date = initialValues.date && initialValues.date.split("T")[0];
  initialValues.sponsors = initialValues.sponsors && initialValues.sponsors.map((sponsor) => {
    return sponsor._id;
  });
  initialValues.chapter = initialValues.chapter && initialValues.chapter._id;

  return {
    sponsors: state.sponsors,
    chapters: state.chapters,
    token: state.auth.token,
    initialValues
  }
}

export default connect(mapStateToProps)(withRouter(wrappedEventForm));