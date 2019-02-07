import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {connect} from "react-redux"
import Input from "./fields/Input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileUploadForm from "./fields/FileUploadForm";

class SponsorForm extends Component {
  state= {isOpen: false}
  
  handleFormSubmit = async(formValues) => {
    const {sponsor, onFormSubmit} = this.props
    await onFormSubmit(formValues, sponsor)
    this.toggle()
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { isCreate, handleSubmit,  handleFileUpload, buttonLabel } = this.props;
    return (
      // <Button outline color="warning" onClick={() => onEdit(sponsor)}>Edit</Button>
      <>
      <Button outline color="warning" onClick={this.toggle}>{buttonLabel}</Button>
      <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{isCreate ? 'Create a new sponsor' : 'Update sponsor'}</ModalHeader>
        <form onSubmit={handleSubmit(this.handleFormSubmit)}>
          <ModalBody>
            <div>
              <label>Name</label>
              <div>
                <Field
                  name="name"
                  component={Input}
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label>Description</label>
              <div>
                <Field
                  name="description"
                  component={Input}
                  type="textarea"
                  placeholder="Description"
                />
              </div>
            </div>
            <div>
              <label>Website</label>
              <div>
                <Field
                  name="website"
                  component={Input}
                  type="text"
                  placeholder="Website"
                />
              </div>
              <div>
                <Field
                  name="image"
                  component={FileUploadForm}
                  type="file"
                  handleFileUpload={handleFileUpload}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="info" type="submit">{isCreate ? 'Create' : 'Update'}</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  const {...initialValues} = props.sponsor
  return {
    initialValues,
    token: state.auth.token,
    form: (props.sponsor && props.sponsor._id) || "event"
  }
}

const wrappedSponsorForm = reduxForm({
  enableReinitialize: true
})(SponsorForm);

export default connect(mapStateToProps)(wrappedSponsorForm)