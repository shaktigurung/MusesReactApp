import React, { Component } from 'react';
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import NewsForm from "../forms/NewsForm"
import {createNews} from "../../actions/newsActions"
import {Badge} from "reactstrap";

class CreateNewsPage extends Component {
  state = { file: null }

  onFormSubmit = (formValues) => {
    const {createNews, token} = this.props
    const formData = new FormData()
    if (this.state.file) {
      formData.append("file", this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    createNews(formData, token)
      .then(this.props.history.push("/news"))
  }
  
  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() { 
    return (
      <div>
      <h1> <Badge className="muses-primary"> News </Badge> </h1>
      <NewsForm 
        onFormSubmit={this.onFormSubmit} 
        handleFileUpload={this.handleFileUpload}
        buttonLabel="Create News"  
      />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps, {createNews})(withRouter(CreateNewsPage));