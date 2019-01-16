import React, { Component } from 'react';
import axios from 'axios'
require("dotenv").config()

class FileUploadForm extends Component {
  state = {file: null}

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0])
    axios.post(`http://localhost:3000/files`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => console.log(response)
    ).catch(error => console.log(error)

    )
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files})
  }

  render() {
    return (  
      <form onSubmit={this.submitFile}>
        <input type="file" label="upload file" onChange={this.handleFileUpload}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileUploadForm; 