import React, { Component } from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import QuillEditor from './fields/QuillEditor';
import FileUploadForm from "./fields/FileUploadForm"



class NewsForm extends Component {
  state = {  }

  render() {
    const {handleSubmit, onFormSubmit, handleFileUpload} = this.props
    return (  
      <form onSubmit={handleSubmit(onFormSubmit)}>
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

const wrappedNewsForm = reduxForm({
  form: "news",
  enableReinitialize: true
})(NewsForm)

const mapStateToProps = (state, props) => {
  const {...initialValues} = props.newsItem
  return {
    initialValues
  }
}

export default connect(mapStateToProps)(wrappedNewsForm);