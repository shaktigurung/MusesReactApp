import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createChapter } from "./../../actions/chapterActions";
import Input from "./fields/Input";
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    const { createChapter, reset, token } = this.props;
    createChapter({ city }, token)
      .then(() => this.props.history.push("/aboutus"))
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <ModalHeader toggle={this.toggle}>Create a new chapter</ModalHeader>
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