import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createChapter } from "./../../actions/chapterActions";
import Input from "./fields/Input";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class CreateChapterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onFormSubmit = async (formValues) => {
    const { city } = formValues;
    const { createChapter, token } = this.props;
    await createChapter({ city }, token)
    alert("Chapter created successfully!");
    this.props.history.push("/admin/chapter");
  }

  handleCancelClick = () => {
    this.toggle()
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Button className="muses-secondary" onClick={this.toggle}>Create New Chapter</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Create New Chapter</ModalHeader>
          <form onSubmit={handleSubmit(this.onFormSubmit)}>
            <ModalBody>
              <div>
                <label>City</label>
                <div>
                  <Field
                    name="city"
                    component={Input}
                    type="text"
                    placeholder="City"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="info" type="submit">Create</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    )
  }
}

const WrappedCreateChapterForm = reduxForm({
  form: 'simple',
  validate: ({ city }) => {
    const errors = {};

    if (!city) {
      errors.city = "City is required!"
    }

    return errors;
  }
})(CreateChapterForm)

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { createChapter })(withRouter(WrappedCreateChapterForm));