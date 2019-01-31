import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from "reactstrap";
import { getResources, removeResource } from "../../actions/resourceAction";
import { connect } from "react-redux";

class ResourceList extends Component {

  // handleRemoveResource = async (chapterId) => {
  //   const { removeChapter, token } = this.props;
  //   removeChapter(chapterId, token)
  //     .then(() => this.props.history.push("/admin/chapter/edit"))
  // }

  render() {
    const { resources } = this.props;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Edit?</th>
                    <th>Remove?</th>
                  </tr>
                </thead>
                {resources.map(resource => (
                  <tbody>
                    <tr>
                      <td scope="row">{resource.title}</td>
                      <td><Button outline color="warning">Edit</Button></td>
                      <td><Button outline color="danger">Delete</Button></td>
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
    resources: state.resources,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, { getResources, removeResource })(ResourceList);