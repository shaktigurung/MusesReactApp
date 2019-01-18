import React from "react";

const ResourceItems = (props) => {

  return (
    <div>
      <h4>{props.resourceTitle}</h4>
      <a href={props.resourceLink}> Resource Link</a>
    </div>
  )
}

export default ResourceItems;