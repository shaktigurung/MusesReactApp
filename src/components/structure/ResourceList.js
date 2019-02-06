import React, { Component } from 'react';
import { Table, Container, Row, Col, Button } from "reactstrap";
import { getResources, removeResource } from "../../actions/resourceAction";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ResourceList extends Component {

  handleRemoveResource = async (resourceId) => {
    const { removeResource, token } = this.props;
    removeResource(resourceId, token)
      .then(() => {
        alert("Resource removed!");
        this.props.history.push("/admin/resources/create");
      });
  }

  render() {
    const { resources, onEdit } = this.props;
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
                  <tbody key={resource._id}>
                    <tr>
                      <th scope="row">{resource.title} </th>
                      <td><Button outline color="warning" onClick={() => onEdit(resource)}>Edit</Button></td>
                      <td><Button outline color="danger" onClick={() => this.handleRemoveResource(resource._id)}>Delete</Button></td>
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

export default connect(mapStateToProps, { getResources, removeResource })(withRouter(ResourceList));