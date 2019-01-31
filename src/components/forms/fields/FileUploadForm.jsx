import React, { Component } from 'react';
import axios from 'axios'
require("dotenv").config()

class FileUploadForm extends Component {
  state = {file: null}

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0])
    axios.post(`${process.env.REACT_APP_BACK_END_DOMAIN}/files`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => console.log(response)
    ).catch(error => console.log(error)

    )
  }

  render() {
    const {handleFileUpload} = this.props
    return (  
      // <form onSubmit={this.submitFile}>
        <input type="file" label="upload file" onChange={handleFileUpload}/>
        // <button type="submit">Submit</button>
      // </form>
    );
  }
}

export default FileUploadForm; 