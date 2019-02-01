import React from 'react';

const SponsorThumbnail = (props) => {
  const { logo, name } = props.sponsor
  return (
    <span className="sponsor_thumbnail_container">
      <img src={logo} alt={`${name}`} className="profile_thumb" />
    </span>
  )
}

export default SponsorThumbnail