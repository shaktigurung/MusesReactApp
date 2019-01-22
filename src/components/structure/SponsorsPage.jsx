import React, { Component } from 'react';
import {connect} from "react-redux";
import {getSponsors} from '../../actions/sponsorAction'

class SponsorsPage extends Component {

  componentDidMount(){
    this.populateSponsors()
  }

  populateSponsors = () => {
    const {getSponsors} = this.props
    getSponsors()
  }
  render() {
    if (this.props.sponsors) { 
      return (
        <div>
          {this.props.sponsors.map(sponsor => 
            <>  
              <div>
                {sponsor.name}
              </div>
              <div>
                {sponsor.description}
              </div>
              <div>
                {sponsor.website}
              </div>
              <div>
                <img src={sponsor.website} alt=""/>
              </div>
            </>
          )}
        </div>
      )
    } else {
      return <h1>Loading</h1>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sponsors: state.sponsors
  }
}

export default connect(mapStateToProps, {getSponsors})(SponsorsPage);