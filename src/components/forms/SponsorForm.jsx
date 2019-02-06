import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./fields/Input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FileUploadForm from "./fields/FileUploadForm";

class NewSponsorForm extends Component {

  render() {
    const { toggle, isOpen, isCreate, handleSubmit, handleFileUpload } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{isCreate ? 'Create a new sponsor' : 'Update sponsor'}</ModalHeader>
        <form onSubmit={handleSubmit}>
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
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

export default reduxForm({
  form: "sponsor",
  validate: ({ name, description, website, image }) => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required!"
    }

    if (!description) {
      errors.description = "Description is required!"
    }

    if (!website) {
      errors.website = "Website is required!"
    }

    if (!image) {
      errors.image = "Image is required!"
    }

    return errors;
  }
})(NewSponsorForm);