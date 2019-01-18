import React from "react";
import { connect } from "react-redux";

const ChapterSelector = (props) => {

  const { chapterList } = props;
  return (
    <div>
      <h1>Select your city:</h1>
      <select>
        {chapterList.map(element => <option value={element.id}>{element.name}</option>)}
      </select>
    </div>
  )
}


export default connect()(ChapterSelector);