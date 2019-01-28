import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {getSponsors} from "./../../actions/sponsorAction";
import {getChapters} from "./../../actions/chapterActions";
import FileUploadForm from './FileUploadForm';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {editEvent} from "./../../actions/eventActions";
require('dotenv').config();

class EditEventForm extends Component{

  state = {
    sponsors: [],
    chapter: []
  }

  componentDidMount(){
    this.props.getSponsors();
    this.props.getChapters();
    this.handleInitialize();
    console.log(this.props);
  }

  handleInitialize() {
    //console.log(this.props);
    // const initData = {
    //   "title": this.props.title,
    //   "location": this.props.location,
    // };
    // this.props.initialize(initData);
    
  }
   
  onFormSubmit = values => {

    let formData = new FormData();
  
    if (this.state.file) {
      formData.append('file', this.state.file[0])
  
    }
    for(let key in values) {
      formData.append(key, values[key])
    }
    
    this.props.editEvent(formData, this.props.token)
        .then(()=> this.props.history.push("/events"))
        
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render(){
  const { handleSubmit } = this.props
  const {sponsors, chapters} = this.props; 

  return (
    <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
        <label htmlFor="eventImage"> Event Image</label>
        <Field name="image" component={FileUploadForm} type="file" handleFileUpload={this.handleFileUpload}/>
      </div>
      <div>
        <label htmlFor="eventTitle"> Event title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="eventDescription">Description</label>
        <Field name="description" component="textarea" />
      </div>
      <div>
        <label htmlFor="eventLocation"> Location </label>
        <Field name="location" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="eventDate"> Date </label>
        <Field name="date" component="input" type="date" />
      </div>
      <div>
        <label> Select Sponsors </label>
        <div>
          <Field multiple name="sponsors" component="select">
            {sponsors.map((sponsor) => 
            <option key={sponsor._id} value={sponsor._id}>{sponsor.name}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <label> Select Chapter </label>
        <div>
          <Field name="chapter" component="select">
            {chapters.map((chapter) => 
            <option key={chapter._id} value={chapter._id}>{chapter.city}</option>
            )}
          </Field>
        </div>
      </div>
      <div>
        <label>Event Type</label>
        <div>
          <Field name="type" component="select">
            <option />
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Approved</label>
        <div>
          <Field name="approved" component="select">
            <option />
            <option value="true"> Yes </option>
            <option value="false"> No </option>
          </Field>
        </div>
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
  }
}
EditEventForm = reduxForm({
    // a unique name for the form
    form: 'edit',
    destroyOnUnmount: false
})(EditEventForm)

function mapStateToProps(state, props){
  console.log(props.id);
  return{
    sponsors: state.sponsors,
    chapters: state.chapters,
    token: state.auth.token
    //event: props.id
  }
}

export default connect(mapStateToProps,{ getSponsors, getChapters, editEvent})(withRouter(EditEventForm));