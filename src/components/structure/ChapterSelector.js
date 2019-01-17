import React from "react";

/*
const props = {
  cities: [
    {
      id: 'a',
      name: 'Sydney',
    },
    {
      id: 'b',
      name: 'Melbourne',
    },
  ]
}
*/

const ChapterSelector = (props) => {
  const chapterList = props.cities.map(element => <option value={element.id}>{element.name}</option>);
  return (
    <div>
      <h1>Select your city:</h1>
      <select>
        {chapterList}
      </select>
    </div>
  )
}

// ChapterSelector.propTypes = {
//   cities: propTypes.arrayOf()
// }

ChapterSelector.defaultProps = {
  cities: [
    {
      id: 'a',
      name: 'Sydney',
    },
    {
      id: 'b',
      name: 'Melbourne',
    },
  ],
}

export default ChapterSelector;