import React, { Component } from 'react';
import {connect} from "react-redux"
import SponsorForm from '../forms/SponsorForm';

class CreateSponsorPage extends Component {
  state = {  }
  render() { 
    return (
      <SponsorForm />
    );
  }
}

export default connect()(CreateSponsorPage);