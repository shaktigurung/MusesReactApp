import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from "reactstrap";
import { getChapters, removeChapter } from "../../actions/chapterActions";
import { connect } from "react-redux";

class ChapterList extends Component {

  handleRemoveChapter = async (chapterId) => {
    const { removeChapter, token } = this.props;
    removeChapter(chapterId, token)
      .then(() => this.props.history.push("/admin/chapter/edit"))
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
                  <tbody>
                    <tr>
                      <td scope="row">{element.city}</td>
                      <td><Button outline color="danger" onClick={this.handleRemoveChapter}>X</Button></td>
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

export default connect(mapStateToProps, { getChapters, removeChapter })(ChapterList);