import React, { Component } from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import QuillEditor from './fields/QuillEditor';
import FileUploadForm from "./fields/FileUploadForm"



class NewsForm extends Component {
  state = { modal: false }

  handleFormSubmit = async (formValues) => {
    const { onFormSubmit, newsItem } = this.props
    await onFormSubmit(formValues, newsItem)
    this.toggle()
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const {handleSubmit, handleFileUpload} = this.props
    return (
      <>
        <Button className="muses-secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>News</ModalHeader>
          <form onSubmit={handleSubmit(this.handleFormSubmit)}>
            <ModalBody>
              <div>
                <label htmlFor="title">Title</label>
              </div>
              <div>
                <Field 
                  name="title" 
                  component="input" 
                  type="text" 
                />
              </div>
              <div>
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <Field 
                  name="content" 
                  component={QuillEditor} 
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
            </ModalBody>
            <ModalFooter>
              <div>
                <button type="submit">Submit</button>
              </div>
            </ModalFooter>
          </form>
        </Modal>
      </>
    );
  }
}

const wrappedNewsForm = reduxForm({
  enableReinitialize: true
})(NewsForm)

const mapStateToProps = (state, props) => {
  const {...initialValues} = props.newsItem
  return {
    initialValues,
    form: props.newsItem._id
  }
}

export default connect(mapStateToProps)(wrappedNewsForm);