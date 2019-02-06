import React, { Component } from 'react';
import { getUsers } from "./../../actions/userAction";
import { updateOrganisers, deleteOrganisers } from "./../../actions/chapterActions";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Container, Row, Col, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { ChapterSelector } from "./../structure/ChapterSelector";
import { withRouter } from "react-router-dom";

class OrganisersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUsers: [],
      chapterId: null,
    };
  }

  addOrganisers = () => {
    const { selectedUsers } = this.state;
    const { updateOrganisers, token } = this.props;
    const chapter = this.getChapter();
    updateOrganisers({ city: chapter.city, organisers: selectedUsers }, chapter._id, token)
      .then(() => {
        this.setState({
          selectedUsers: [],
        });
      });
  }
  removeOrganiser = async (organiserId) => {
    const { deleteOrganisers, token } = this.props;
    const chapter = this.getChapter();
    const updatedOrganisers = chapter.organisers.filter(organiser => organiser._id !== organiserId);
    deleteOrganisers({ city: chapter.city, organisers: updatedOrganisers }, chapter._id, token);
  }

  getChapter = () => {
    const { chapters } = this.props;
    const { chapterId } = this.state;
    return chapterId == null ? null : chapters.filter(chapter => chapter._id === chapterId)[0];
  }

  render() {
    const { chapters, getUsers, token } = this.props;
    const { selectedUsers } = this.state;
    const chapter = this.getChapter();

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
                  this.setState({ chapterId: chapter._id, selectedUsers: [] });
                  getUsers(token, chapter._id);
                }}
              /><br />
              {
                this.state.chapterId && (
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
                    <Button className="muses-tertiary" onClick={this.addOrganisers} >Add to organisers</Button><br /><br />
                    <h3>{chapter.city}'s organisers</h3><br />
                    <Row>
                      <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Remove?</th>
                            </tr>
                          </thead>
                          {chapter.organisers.map(organiser => (
                            <tbody className="muses-primary-text" key={organiser._id}>
                              <tr>
                                <td>{organiser.name}</td>
                                <td><Button outline color="danger" onClick={() => this.removeOrganiser(organiser._id)}>Remove</Button></td>
                              </tr>
                            </tbody>
                          ))}
                        </Table>
                      </Col>
                    </Row>
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
    chapters: state.chapters,
  };
}

export default connect(mapStateToProps, { getUsers, updateOrganisers, deleteOrganisers })(withRouter(OrganisersForm));