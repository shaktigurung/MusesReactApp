import React, { Component } from "react";
import { connect } from "react-redux";

class ChapterMembers extends Component {
  render() {
    return (
      <div>
        <h1>Our Team</h1>
        {this.props.members.map(member =>
          <p key={member.id}>
            Name: {member.name}<br />
            Bio: {member.bio}<br />
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
    members: selectedChapter == null ? [] : chapters.filter(chapter => chapter._id === selectedChapter)[0].organisers
  }
}


export default connect(mapStateToProps)(ChapterMembers);
