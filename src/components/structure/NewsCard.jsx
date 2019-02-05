import React from 'react';
import {connect} from "react-redux"
import {Button} from "reactstrap"
import NewsForm from "../forms/NewsForm"

const NewsCard = (props) => {
  const {newsItem, onFormSubmit, handleFileUpload, handleClickDelete, user} = props
  return (
    <div key={newsItem._id} className="news-container">
      <h2>{newsItem.title}</h2>
      <div>
        <img src={newsItem.image} alt={newsItem.title} className="news-image" />
        {/* {scriptTag.test(newsItem.content) && */}
        <span className="news-content" dangerouslySetInnerHTML={{ __html: newsItem.content }}>
        </span>
      </div>
      {/* } */}
      <div>
        Created at: {newsItem.date_created}
        {/* <Link to={`/admin/news/edit/${newsItem._id}`}> <Button color="primary"> Edit </Button> </Link> */}
        {user &&
          <NewsForm
            key={newsItem._id}
            onFormSubmit={onFormSubmit}
            handleFileUpload={handleFileUpload}
            newsItem={newsItem}
            buttonLabel="Edit"
            className={newsItem._id}
          />}
        {user &&
          <Button className="muses-tertiary" onClick={() => handleClickDelete(newsItem._id)} > Delete </Button>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(NewsCard);