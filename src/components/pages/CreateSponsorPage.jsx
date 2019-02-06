import React, { Component } from 'react';
import {connect} from "react-redux"
import SponsorForm from '../forms/SponsorForm';
import {Badge} from "reactstrap";

class CreateSponsorPage extends Component {
  state = {  }
  render() { 
    return (
      <div>
         <h1> <Badge className="muses-primary">Sponsors</Badge> </h1> 
         <SponsorForm />
      </div>
     
    );
  }
}

export default connect()(CreateSponsorPage);