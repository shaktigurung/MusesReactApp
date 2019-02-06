import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, CardTitle, CardText, CardColumns, Container } from 'reactstrap';
import ErrorPage from "./../pages/ErrorPage";

class ResourceItems extends Component {
  render() {
    if (this.props.resources) {
      return (
        <div>
          <Container fluid>
            <CardColumns>
              {this.props.resources.map(resource =>
                <Card body outline color="info" key={resource._id}>
                  <CardTitle><b>{resource.title}</b></CardTitle>
                  <CardText>{resource.description}</CardText>
                  <a href={resource.link} >
                    <Button outline color="info">See resource</Button>
                  </a>
                </Card>
              )}
            </CardColumns>
          </Container>
        </div >
      )
    } else {
      return (
        <ErrorPage />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources
  }
}

export default connect(mapStateToProps)(ResourceItems);