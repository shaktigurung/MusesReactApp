import React, { Component } from 'react';
import { connect } from "react-redux"
import NewsForm from "../forms/NewsForm"
import { updateNews, deleteNews } from "../../actions/newsActions"
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardImg,
  CardText
} from 'reactstrap';

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
      .then(this.props.history.push("/news"));
  }

  handleClickDelete = (id) => {
    const { deleteNews, token } = this.props
    deleteNews(id, token)
      .then(this.props.history.push("/news"));
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }

  render() {
    const { news, user } = this.props
    // const scriptTag = /<script[\s\S]*?>[\s\S]*?<\/script>/
    if (news) {
      return (
        <div>
          <Container fluid>
            <br /><h1><Badge className="muses-primary"> Muses News </Badge></h1><br />
            {news.map(newsItem =>
              <Card>
                <CardHeader style={{ fontWeight: "bold", fontSize: "30px" }} className="muses-primary-text">{newsItem.title}</CardHeader>
                <CardBody>
                  <Row>
                    <Col xs="6">
                      <CardImg style={{ width: "100%" }} src={newsItem.image} alt={newsItem.title} />
                    </Col>
                    <Col xs="6">
                      <CardText style={{ textAlign: "justify" }}><p dangerouslySetInnerHTML={{ __html: newsItem.content }}></p></CardText>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>Created at {newsItem.date_created}
                  <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
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
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            )}
          </Container>
        </div>
      )
    } else {
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

export default connect(mapStateToProps, { updateNews, deleteNews })(NewsPage);