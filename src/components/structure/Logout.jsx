import React from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom'
import {logout} from "../../actions/registerAction"

function onButtonClick(props) {
  props.logout();
  props.history.push("/")
}

function Logout(props) {
  return <button onClick={() => onButtonClick(props)}>Logout</button>
}

export default connect(null, {logout})(withRouter(Logout))