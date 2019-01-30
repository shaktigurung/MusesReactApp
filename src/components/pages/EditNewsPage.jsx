import React, { Component } from 'react';
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import NewsForm from "../forms/NewsForm"
import {updateNews} from "../../actions/newsActions"

class EditNewsPage extends Component {
  state = { file: null }

  onFormSubmit = (formValues) => {
    const { updateNews, token } = this.props
    const formData = new FormData()
    if (this.state.file) {
      formData.append("file", this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    updateNews(formData, token)
      .then(this.props.history.push("/news"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() { 
    return (  
      <NewsForm 
        onFormSubmit={this.onFormSubmit} 
        handleFileUpload={this.handleFileUpload}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, {updateNews})(withRouter(EditNewsPage));