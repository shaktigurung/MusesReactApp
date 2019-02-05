import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import Input from "./fields/Input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ResourceForm extends Component {
  render() {
    const { toggle, isOpen, isCreate, handleSubmit } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{isCreate ? 'Create a new resource' : 'Update Resource'}</ModalHeader>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <div>
              <label>Title</label>
              <div>
                <Field
                  name="title"
                  component={Input}
                  type="text"
                  placeholder="Title"
                />
              </div>
            </div>
            <div>
              <label>Description</label>
              <div>
                <Field
                  name="description"
                  component={Input}
                  type="text"
                  placeholder="Description"
                />
              </div>
            </div>
            <div>
              <label>Link</label>
              <div>
                <Field
                  name="link"
                  component={Input}
                  type="link"
                  placeholder="Link"
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
  form: "resource",
  validate: ({ title, description, link }) => {
    const errors = {};

    if (!title) {
      errors.title = "Title is required!"
    }

    if (!description) {
      errors.description = "Description is required!"
    }

    if (!link) {
      errors.link = "Link is required!"
    }

    return errors;
  }
})(ResourceForm);