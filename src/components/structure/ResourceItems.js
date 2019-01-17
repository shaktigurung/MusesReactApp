import React, { Component } from "react";

const ResourceItems = (props) => {

  return (
    <div>
      <h4>{props.resourceTitle}</h4>
      <a href={props.resourceLink} target="_blank">Resource Link</a>
    </div>
  )
}

export default ResourceItems;