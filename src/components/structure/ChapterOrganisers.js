import React, { Component } from "react";
import { connect } from "react-redux";

class ChapterOrganisers extends Component {
  render() {
    return (
      <div>
        <h1>Our Team</h1>
        {this.props.organisers.map(organiser =>
          <p key={organiser._id}>
            Name: {organiser.name}<br />
            Bio: {organiser.bio}<br />
            <br />
          </p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { selectedChapter, chapters } = state;
  return {
    organisers: selectedChapter == null ? [] : chapters.filter(chapter => chapter._id === selectedChapter)[0].organisers
  }
}


export default connect(mapStateToProps)(ChapterOrganisers);
