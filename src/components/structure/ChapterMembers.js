import React, { Component } from "react";

class ChapterMembers extends Component {
  render() {
    return (
      <div>
        <h1>Our Team</h1>
        {this.props.members.map(member =>
          <p key={member.id}>
            Name: {member.name}<br />
            Chapter: {member.chapter}<br />
            <br />
          </p>
        )}
      </div>
    )
  }
}

export default ChapterMembers;