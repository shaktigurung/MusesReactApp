import React, { Component } from 'react';
import OrganisersForm from "./../forms/OrganisersForm";
import CreateChapterForm from "./../forms/CreateChapterForm";
import ChapterList from '../structure/ChapterList';
import { connect } from "react-redux";
import UnauthorizedPage from "./UnauthorizedPage";
import {Badge} from "reactstrap";

class EditChapterPage extends Component {

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <h1> <Badge className="muses-primary"> Chapters </Badge> </h1>

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