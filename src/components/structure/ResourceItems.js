import React, { Component } from "react";
import { getResourcesList } from "./../../actions/resourceAction";
import { connect } from "react-redux";

class ResourceItems extends Component {

  componentDidMount() {
    this.props.getResourcesList();
  }

  render() {

    if (this.props.resources.resources) {
      return (
        <div>
          {this.props.resources.resources.map(resource =>
            <p key={resource._id}>
              Title: {resource.title} <br />
              Description: {resource.description} <br />
              Link: {resource.link} <br />
            </p>
          )}
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


export default connect(mapStateToProps, { getResourcesList })(ResourceItems);