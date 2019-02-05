import React, { Component } from 'react';
import {connect} from "react-redux"
import NewsCard from "../structure/NewsCard"
import {updateNews, deleteNews} from "../../actions/newsActions"

class NewsPage extends Component {
  state = { file: null }

  onFormSubmit = (formValues, newsItem) => {
    const { updateNews, token } = this.props
    const formData = new FormData()
    if (this.state.file) {
      formData.append("file", this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    updateNews(formData, newsItem._id, token)
      .then(this.props.history.push("/news"))
  }

  handleClickDelete = (id) => {
    const {deleteNews, token} = this.props
    deleteNews(id, token)
      .then(this.props.history.push("/news"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }
  
  render() {
    const {news} = this.props
    if (news){
    return (
      <div>
        <h1>News</h1>
          {news.map(newsItem => 
            <NewsCard
              handleClickDelete={this.handleClickDelete}
              onFormSubmit={this.onFormSubmit}
              handleFileUpload={this.handleFileUpload}
              newsItem={newsItem}
            />
          )}
      </div>
    )} else {
      return null
    }
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    token: state.auth.token,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, {updateNews, deleteNews})(NewsPage);