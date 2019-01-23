import React, { Component } from "react";
import { getResources } from "./../../actions/resourceAction";
import { connect } from "react-redux";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class ResourceItems extends Component {

  render() {

    if (this.props.resources) {
      return (
        <div>
          <Row>
            <Col sm="6" md={{ size: 6, offset: 3 }}>
              {this.props.resources.map(resource =>
                <Card body>
                  <CardTitle><b>{resource.title}</b></CardTitle>
                  <CardText>{resource.description}</CardText>
                  <a href={resource.link} >
                    <Button outline color="info">See resource</Button>
                  </a>
                </Card>
              )}
            </Col>
          </Row>
        </div>
      )
    } else {
      return (
        <h1>loading</h1>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources
  }
}


export default connect(mapStateToProps, { getResources })(ResourceItems);

// TO DO:
// add pagination to resources page
