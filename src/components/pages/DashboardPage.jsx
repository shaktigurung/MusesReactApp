import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import "./../../App.css";
import {Badge} from "reactstrap";
import { connect } from 'react-redux';
import googleanalytics from "./../images/google-analytics.png";
import ProfilePage from "./ProfilePage";
import EventForm from "../forms/EventForm"
import {createEvent} from "../../actions/eventActions"
import {createNews} from "../../actions/newsActions"
import {updateUser} from "../../actions/registerAction";
import CreateResourcePage from "./CreateResourcePage";
import CreateSponsorPage from './CreateSponsorPage';
import CreateNewsPage from './CreateNewsPage';
import EditChapterPage from "./EditChapterPage";


 class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  state = { file: null }

  onEventFormSubmit = (formValues) => {
    let formData = new FormData();

    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }

    for (let key in formValues) {
      formData.append(key, formValues[key])
    }

    this.props.createEvent(formData, this.props.token)
      .then(() => this.props.history.push("/events"))
  }

  onNewsFormSubmit = (formValues) => {
    const { createNews, token } = this.props
    const formData = new FormData()
    if (this.state.file) {
      formData.append("file", this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    createNews(formData, token)
      .then(this.props.history.push("/news"))
  }

  onUserFormSubmit = (formValues) => {
    const { updateUser, token } = this.props
    let formData = new FormData();
    if (this.state.file) {
      formData.append('file', this.state.file[0])
    }
    for (let key in formValues) {
      formData.append(key, formValues[key])
    }
    updateUser(formData, token)
      .then(this.props.history.push("/admin/dashboard"))
  }

  handleFileUpload = (event) => {
    this.setState({ file: event.target.files })
  }
  render() {
    return (
      <div>
        <Row>
        <Col xs="2">
        <Nav tabs vertical>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
              
            >
             <h6 className="dashboard"> <i className="fas fa-server"></i> Dashboard </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
            <h6 className="dashboard"><i className="far fa-user"></i> Profile </h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            <h6 className="dashboard"><i className="fas fa-folder-plus"></i> Events</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
            <h6 className="dashboard"><i className="fab fa-sourcetree"></i> Resources</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
           <h6 className="dashboard"><i className="fas fa-file-alt"></i> Sponsors</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
           <h6 className="dashboard"><i className="fas fa-newspaper"></i> News</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
           <h6 className="dashboard"><i className="fas fa-city"></i> Chapters</h6>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }}
            >
           <h6 className="dashboard"><i className="fas fa-tools"></i> Settings</h6>
            </NavLink>
          </NavItem>
        </Nav>
        </Col>
        {/* <!--Main Content--> */}

        <Col>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
              <Col>
                <h1> <Badge className="muses-primary">Dashboard</Badge> </h1> 
                <img src={googleanalytics} alt="google-analytics" className="effect"  style={{width:"100%"}} />
              </Col>
          </TabPane>
          <TabPane tabId="2">
              <Col >
                <ProfilePage/>
              </Col>
          </TabPane>
          <TabPane tabId="3">
              <Col >
                <h1> <Badge className="muses-primary"> Events </Badge> </h1> 
                <EventForm
                            onFormSubmit={this.onEventFormSubmit}
                            handleFileUpload={this.handleFileUpload}
                            eventItem={null}
                            buttonLabel="Create New Event"      
                />

              </Col> 
          </TabPane>
          <TabPane tabId="4">
              <Col >
                <CreateResourcePage/>
              </Col>
          </TabPane>
          <TabPane tabId="5">
              <Col >
                <CreateSponsorPage/>
              </Col>
          </TabPane>
          <TabPane tabId="6">
              <Col >
                <CreateNewsPage/>
              </Col>
          </TabPane>
          <TabPane tabId="7">
              <Col >
                <EditChapterPage/>
              </Col>
          </TabPane>
          <TabPane tabId="8">
              <Col >
                <h1> <Badge className="muses-primary"> Settings </Badge> </h1> 
                <h2> Settings Coming Soon....</h2>
              </Col>
          </TabPane>
        </TabContent>
        </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
      user: state.auth.user,
      token: state.auth.token
    }
  }
export default connect(mapStateToProps, {createEvent, createNews, updateUser})(Dashboard);