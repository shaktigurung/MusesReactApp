import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form'
import {postMailingList} from "../../actions/mailingListActions"
import Alert from "../structure/Alert"
import {setAlert} from "../../actions/alertActions"

class MailingListForm extends Component {
  
  onFormSubmit = async(formValues) => {
    const {postMailingList, setAlert} = this.props

    await postMailingList(formValues)
      .then(response => setAlert("Success"))
      .catch(err => setAlert("Please make sure you fill in all the fields"))
  }
  
  render() {
    const {handleSubmit, chapters} = this.props 
    return (  
      <form onSubmit={handleSubmit(this.onFormSubmit)} >
        <Alert />
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="chapter">Chapter</label>
        </div>
        <div>
          <Field name="chapter" component="select" >
            {chapters.map((chapter) =>
              <option key={chapter._id} value={chapter._id}>{chapter.city}</option>
            )}
          </Field>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

const wrappedMailingListForm = reduxForm({
  form: "mailing_list"
})(MailingListForm)

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, {
  postMailingList,
  setAlert
})(wrappedMailingListForm);