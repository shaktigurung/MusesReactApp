import React, { Component } from 'react';
import {connect} from 'react-redux'

class ProfilePage extends Component {
  state = { }
  render() {
    const {user} = this.props
    if (user) {
    return (
        <>
        <h1>hey</h1>

        <div>  
          <h4>{user.name}</h4>
        </div>
        <div>  
          Bio: {user.bio}
        </div>
        <div>  
          Website: {user.website}
        </div>
        <div>  
          Avatar: <img src={user.avatar} alt={`${user.name}'s avatar`} />
        </div>

      </>

    );
  } else {
    return <h1>Loading</h1>
  }}
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

 export default connect(mapStateToProps)(ProfilePage);
