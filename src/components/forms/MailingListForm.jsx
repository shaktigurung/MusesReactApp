import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import { postMailingList } from "../../actions/mailingListActions"
import Alert from "../structure/Alert"
import {setAlert} from "../../actions/alertActions";
import "./../../App.css";

class MailingListForm extends Component {
  state = { modal: false }

  onFormSubmit = async (formValues) => {
    const { postMailingList } = this.props

    await postMailingList(formValues)
    this.toggle()
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const { handleSubmit, chapters } = this.props
    return (
      <>  
        <div className="mailing-list">
        <Button className="muses-tertiary" onClick={this.toggle}>Join Mailing List</Button>
        </div>
        <Modal 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
          // className={this.props.className}

        >
          <ModalHeader toggle={this.toggle}>Join Mailing List</ModalHeader>
          <form onSubmit={handleSubmit(this.onFormSubmit)} >
            <Alert />
            <ModalBody>

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
            </ModalBody>
            <ModalFooter>
              <div>
                <button onClick={this.toggle} type="submit">Submit</button>
              </div>
            </ModalFooter>
          </form>
        </Modal>
      </>
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