import React from 'react';

const UserThumbnail = (props) => {
  const {image, name} = props.user
  return (
    <span className="user_thumbnail_container">
      <img src={image} alt={`${name}`} className="profile_thumb"/>
      <span className="user_thumb">{name}</span>
    </span>
  )
}

export default UserThumbnail