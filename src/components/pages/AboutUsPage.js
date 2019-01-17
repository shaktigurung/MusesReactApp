import React, { Component } from 'react';
import Description from '../structure/Description';
import ChapterSelector from '../structure/ChapterSelector';
import TeamMembers from '../structure/TeamMembers';
import { getChaptersList } from "./../../actions/chapterActions";
import { connect } from "react-redux";

class AboutUsPage extends Component {
  componentDidMount() {
    this.props.getChaptersList();
  }
  render() {
    const { chapters } = this.props;
    return (
      <div>
        <h1>About Us</h1>
        <Description>
          <p>
            We believe that everyone should try programming at least once in their life. Therefore we created a community where, in a friendly atmosphere with a great vibe you can try programming for the first time or, if you already code, learn something new about JavaScript and/or Node.js.
          </p>
          <p>
            Our half day coding bootcamps are also a great opportunity to grow your network and meet new people with similar interests. Come and join our next half-day coding bootcamp with lunch provided.
          </p>
        </Description>

        <select>
          {chapters.map(element => <option value={element._id}>{element.city}</option>)}
        </select>

        <TeamMembers />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapters
  }
}

export default connect(mapStateToProps, { getChaptersList })(AboutUsPage);