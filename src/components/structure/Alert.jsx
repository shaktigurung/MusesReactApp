import React from 'react';
import { connect } from 'react-redux';

function Alert(props) {
  const style = {
    color: "red"
  }
  return <p style={style}>{props.alert}</p>
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps)(Alert)