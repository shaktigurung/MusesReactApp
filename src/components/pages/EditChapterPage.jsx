import React, { Component } from 'react';
import OrganisersForm from "./../forms/OrganisersForm";
import CreateChapterForm from "./../forms/CreateChapterForm";
import ChapterList from '../structure/ChapterList';
import { connect } from "react-redux";
import UnauthorizedPage from "./UnauthorizedPage";

class EditChapterPage extends Component {

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <h1>Chapters Dashboard</h1>
          <div className="createChapter">
            <CreateChapterForm />
          </div>
          <br />
          <div className="removeChapter">
            <ChapterList /><br />
          </div>
          <div>
            <OrganisersForm /><br />
          </div>
          <div className="organisersList">

          </div>
        </div>
      );
    } else {
      return (
        <UnauthorizedPage />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(EditChapterPage);