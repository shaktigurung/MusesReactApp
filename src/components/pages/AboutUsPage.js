import React, { Component } from 'react';
import Description from '../structure/Description';
import ChapterSelector from '../structure/ChapterSelector';
import ChapterMembers from '../structure/ChapterMembers';

class AboutUsPage extends Component {
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

        <ChapterSelector />

        <ChapterMembers members={[
          {
            id: 1,
            name: "Jessica",
            chapter: "Sydney"
          },
          {
            id: 2,
            name: "John",
            chapter: "Melbourne"
          },
          {
            id: 3,
            name: "Whatever",
            chapter: "Brisbane"
          },
          {
            id: 4,
            name: "fdsflkjsd",
            chapter: "Perth"
          }
        ]} />

      </div>
    );
  }
}

export default AboutUsPage;