import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {getSponsors} from "./../../actions/sponsorAction";
import {getChapters} from "./../../actions/chapterActions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
//import axios from "axios";
require('dotenv').config();

class CreateEvent extends Component{

  // state = {
  //   sponsors: [{
  //     name:"abc",
  //     _id: 1 
  //     },
  //     {
  //       name:"def",
  //       _id: 2 
  //       },
  //       {
  //         name:"ghi",
  //         _id: 3 
  //         }, ]
  // }
  state = {
    sponsors: [],
    chapter: []
  }
  componentDidMount(){
    this.props.getSponsors();
    this.props.getChapters();
  }

  render(){
  const { handleSubmit } = this.props
  const {sponsors, chapters} = this.props; // later change into props for data from database
  console.log(chapters);
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="eventImage"> Event Image</label>
        <Field name="image" component="input" type="text" />
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
CreateEvent = reduxForm({
    // a unique name for the form
    form: 'create',
    destroyOnUnmount: false
})(CreateEvent)

function mapStateToProps(state){
  return{
    sponsors: state.sponsors,
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { getSponsors, getChapters}) (withRouter(CreateEvent));