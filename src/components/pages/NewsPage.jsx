import React, { Component } from 'react';
import {connect} from "react-redux"

class NewsPage extends Component {
  
  render() {
    const {news} = this.props
    const scriptTag = /<script[\s\S]*?>[\s\S]*?<\/script>/
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
    news: state.news
  }
}

export default connect(mapStateToProps)(NewsPage);