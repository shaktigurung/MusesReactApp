import React from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {Button} from 'reactstrap';
import {logout} from "../../actions/registerAction";
import "./../../App.css"

function onButtonClick(props) {
  props.logout();
  props.history.push("/")
}

function Logout(props) {
  return <Button  className="muses-tertiary" onClick={() => onButtonClick(props)}> Logout </Button>
}

export default connect(null, {logout})(withRouter(Logout))