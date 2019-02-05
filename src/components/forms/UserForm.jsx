import React, { Component } from 'react';
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import { createUser } from "../../actions/registerAction"
import FileUploadForm from './fields/FileUploadForm';
import QuillEditor from "./fields/QuillEditor"
import { renderField, email, required } from "../../services/formValidation"


class UserForm extends Component {
  state = { modal: false }

  onFormChange(name, event) {
    this.setState({ [name]: event.target.value })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const { handleSubmit, chapters, onFormSubmit, handleFileUpload } = this.props
    const user = this.props.initialValues
    if (chapters) {
      return (
        <>
          <Button className="muses-secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          // className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>User Information</ModalHeader>
            <form onSubmit={handleSubmit(onFormSubmit)}>
              <ModalBody>
                <div>
                  <Field
                    name="email"
                    component={renderField}
                    type="text"
                    label="Email"
                    validate={[email, required]}
                  // onChange={(event) => this.onFormChange('email', event)}
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    component={renderField}
                    type="password"
                    label="Password"
                    validate={[required]}
                  // onChange={(event) => this.onFormChange('password', event)}
                  />
                </div>
                <div>
                  <Field
                    name="name"
                    component={renderField}
                    type="text"
                    label="Full Name"
                    validate={[required]}
                  // onChange={(event) => this.onFormChange('name', event)}
                  />
                </div>
                <div>
                  <label htmlFor="bio">Bio</label>
                </div>
                <div>
                  <Field
                    name="bio"
                    component={QuillEditor}
                    type="text"
                    label="Bio"
                  // onChange={(event) => this.onFormChange('bio', event)}
                  />
                </div>
                <div>
                  <Field
                    name="website"
                    component={renderField}
                    type="text"
                    label="Website"
                  // onChange={(event) => this.onFormChange('website', event)}
                  />
                </div>
                <div>
                  <label htmlFor="chapter">Chapter</label>
                </div>
                <div>
                  <Field
                    name="chapter"
                    component="select" >
                    {chapters.map(chapter =>
                      <option key={chapter._id} value={chapter._id}>{chapter.city}</option>
                    )}
                  </Field>
                </div>
                <div>
                  <label htmlFor="image">Image</label>
                </div>
                <div>
                  {user &&
                    <img src={user["image"]} alt={`${user["name"]} profile`} />}
                </div>
                <div>
                  <Field
                    name="image"
                    component={FileUploadForm}
                    type="file"
                    handleFileUpload={handleFileUpload} />
                </div>
              </ModalBody>
              <ModalFooter>
                <div>
                  <button type="submit">{this.props.formType}</button>
                </div>
              </ModalFooter>
            </form>
          </Modal>
        </>
      )
    } else {
      return null
    }
  }
}

const wrappedUserForm = reduxForm({
  form: "user",
  enableReinitialize: true
})(UserForm);


const mapStateToProps = (state) => {
  const { ...initialValues } = state.auth.user
  const { token } = state.auth;
  return {
    token,
    initialValues,
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { createUser })(withRouter(wrappedUserForm))
