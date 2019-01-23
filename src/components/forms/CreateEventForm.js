import React from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from "axios";
require('dotenv').config();

let CreateEvent = props => {
  const { handleSubmit } = props
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
        <Field name="date" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="eventSponsor"> Sponsor </label>
        <Field name="sponsors" component="input" type="text" />
      </div>
      <div>
        <label>Select Sponsors </label>
        <div>
          <Field name="sponsors" component="select">
            
            <option></option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="eventChapter"> Chapter </label>
        <Field name="chapter" component="input" type="text" />
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
            <option value="Yes"> Yes </option>
            <option value="No"> No </option>
          </Field>
        </div>
      </div>
      <br/>
      <button type="submit">Submit</button>
    </form>
  )
}

CreateEvent = reduxForm({
    // a unique name for the form
    form: 'create',
    destroyOnUnmount: false
})(CreateEvent)

export default CreateEvent;