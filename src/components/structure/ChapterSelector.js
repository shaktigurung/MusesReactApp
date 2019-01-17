import React, { Component } from "react";
import { getChaptersList } from "./../../actions/chapterActions";
import { connect } from "react-redux";

class ChapterSelector extends Component {
  componentDidMount() {
    this.props.getChaptersList();
  }

  render() {
    const { chapters } = this.props;
    return (
      <div>
        <select>
          {chapters.map(element => <option value={element._id}>{element.city}</option>)}
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { getChaptersList })(ChapterSelector);