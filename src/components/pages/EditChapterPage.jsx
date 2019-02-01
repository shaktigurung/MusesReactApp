import React, { Component } from 'react';
import OrganisersForm from "./../forms/OrganisersForm";
import CreateChapterForm from "./../forms/CreateChapterForm";
import ChapterList from '../structure/ChapterList';
import { Button, Modal } from "reactstrap";
import { connect } from "react-redux";
import UnauthorizedPage from "./UnauthorizedPage";

class EditChapterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <div>
          <h1>Chapters</h1>
          <div className="createChapter">
            {/* <Button color="info" onClick={this.toggle}>Create a new chapter</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <CreateChapterForm />
            </Modal> */}
            <CreateChapterForm />
            
          </div>
          <br />
          <div className="removeChapter">
            <ChapterList /><br />
          </div>
          <div>
            <OrganisersForm /><br />
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