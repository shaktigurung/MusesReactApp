import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from "reactstrap";
import { getChapters, removeChapter } from "../../actions/chapterActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ChapterList extends Component {

  handleRemoveChapter = async (chapterId) => {
    const { removeChapter, token } = this.props;
    await removeChapter(chapterId, token)
  }

  render() {
    const { chapters } = this.props;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Table>
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Remove ?</th>
                  </tr>
                </thead>
                {chapters.map(element => (
                  <tbody className="muses-primary-text" key={element._id}>
                    <tr>
                      <td>{element.city}</td>
                      <td><Button outline color="danger" onClick={() => this.handleRemoveChapter(element._id)}>Delete</Button></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { getChapters, removeChapter })(withRouter(ChapterList));