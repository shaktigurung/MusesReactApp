import React, { Component } from 'react';
import { getUsers } from "./../../actions/userAction";
import { updateOrganisers } from "./../../actions/chapterActions";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { ChapterSelector } from "./../structure/ChapterSelector";

class OrganisersForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedUsers: [],
    };
  }

  addOrganisers = () => {
    const { chapter, selectedUsers } = this.state;
    const { updateOrganisers, token } = this.props;
    updateOrganisers({ city: chapter.city, organisers: selectedUsers }, chapter._id, token)
      .then(() => {
        this.setState({
          selectedUsers: [],
        });
      });
  }

  render() {
    const { chapters, getUsers, token } = this.props;
    const { chapter, selectedUsers } = this.state;

    return (
      <div>
        <h1>Organisers</h1>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <ChapterSelector
                chapters={chapters}
                selectedCity={chapter}
                onChange={(chapter) => {
                  this.setState({ chapter: chapter, selectedUsers: [] });
                  getUsers(token, chapter._id);
                }}
              /><br />
              {
                this.state.chapter && (
                  <>
                    <Typeahead
                      selected={selectedUsers}
                      onChange={(value) => this.setState({ selectedUsers: value })}
                      labelKey="name"
                      multiple
                      align="left"
                      options={this.props.users}
                      placeholder="Choose an user..."
                    /> <br />
                    <Button outline color="info" onClick={this.addOrganisers} >Add to organisers</Button>
                  </>
                )
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    token: state.auth.token,
    selectedChapter: state.selectedChapter, // do I need this ?
    chapters: state.chapters,
  };
}

export default connect(mapStateToProps, { getUsers, updateOrganisers })(OrganisersForm);