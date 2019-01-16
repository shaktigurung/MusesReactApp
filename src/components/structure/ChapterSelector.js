import React, { Component } from "react";

const ChapterSelector = (props) => {
  return (
    <div>
      <h1>Select your city:</h1>
      <select>
        <option value="sydney">Sydney</option>
        <option value="melbourne">Melbourne</option>
        <option value="brisbane">Brisbane</option>
        <option value="perth">Perth</option>
      </select>
    </div>
  )
}

export default ChapterSelector;