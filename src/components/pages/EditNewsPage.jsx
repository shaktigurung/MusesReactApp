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
    const {news} = this.props
    if (news) {
      const newsItem = news.filter(newsItem => newsItem._id === this.props.match.params.id)

      return (  
        <NewsForm 
          onFormSubmit={this.onFormSubmit} 
          handleFileUpload={this.handleFileUpload}
          newsItem={newsItem[0]}
        />
      );
    } else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    news: state.news
  }
}

export default connect(mapStateToProps, {updateNews})(withRouter(EditNewsPage));