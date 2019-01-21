import React, { Component } from "react";
import { getResourcesList } from "./../../actions/resourceAction";
import { connect } from "react-redux";

class ResourceItems extends Component {

  componentDidMount() {
    this.props.getResourcesList();
  }

  render() {
    const resources = [];
    return (
      <div>
        {resources.map(resource =>
          <p key={resource.id}>
            Title: {resource.title} <br />
            Description: {resource.description} <br />
            Link: {resource.link} <br />
          </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    resources: state.resources
  }
}


export default connect(mapStateToProps, { getResourcesList })(ResourceItems);