import React, { Component } from 'react';
import {connect} from "react-redux"
// import {Link} from "react-router-dom"
import {Button} from "reactstrap"
import NewsForm from "../forms/NewsForm"
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
    const {news, user} = this.props
    // const scriptTag = /<script[\s\S]*?>[\s\S]*?<\/script>/
    if (news){
    return (
      <div>
        <h1>News</h1>
          {news.map(newsItem => 
            <div>
              <h2>{newsItem.title}</h2>
              <div>
                <img src={newsItem.image} alt={newsItem.title} />
              </div>
              {/* {scriptTag.test(newsItem.content) && */}
                <div dangerouslySetInnerHTML={{__html: newsItem.content}}>
                </div>
                {/* } */}
              <div>
                Created at: {newsItem.date_created}
                {/* <Link to={`/admin/news/edit/${newsItem._id}`}> <Button color="primary"> Edit </Button> </Link> */}
                {user &&
                  <NewsForm
                    key={newsItem._id}
                    onFormSubmit={this.onFormSubmit}
                    handleFileUpload={this.handleFileUpload}
                    newsItem={newsItem}
                    buttonLabel="Edit"
                    className={newsItem._id}
                  />}
                {user &&
                        <Button className="muses-tertiary" onClick={() => this.handleClickDelete(newsItem._id)} > Delete </Button>}
              </div>
            </div>
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