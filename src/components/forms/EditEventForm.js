import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {getSponsors} from "./../../actions/sponsorAction";
import {getChapters} from "./../../actions/chapterActions";
import FileUploadForm from './FileUploadForm';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class EditEventForm extends Component{
  render(){
    const { handleSubmit, onFormSubmit, handleFileUpload } = this.props
    const {sponsors, chapters} = this.props; 
    console.log(this.props);

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        <div>
          <label htmlFor="eventImage"> Event Image</label>
          <Field name="image" component={FileUploadForm} type="file" handleFileUpload={this.handleFileUpload}/>
        </div>
        <div>
          <label htmlFor="title"> Event title</label>
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
    enableReinitialize: true,
    destroyOnUnmount: false
})(EditEventForm)

function mapStateToProps(state, props){
  const {...initialValues} = props.event
  initialValues.date = initialValues.date && initialValues.date.split("T")[0];
  initialValues.sponsors = initialValues.sponsors && initialValues.sponsors.map((sponsor)=>{
    return sponsor.name;
  });
  initialValues.chapters = initialValues.chapters && initialValues.chapters.map((chapter)=> chapter.city);
  //console.log(props.id);
  return{
    sponsors: state.sponsors,
    chapters: state.chapters,
    token: state.auth.token,
    initialValues
  }
}

export default connect(mapStateToProps,{ getSponsors, getChapters, editEvent})(withRouter(EditEventForm));