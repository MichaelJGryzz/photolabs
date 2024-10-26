import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  // Destructure the props for easier access to properties
  const { id, imageSource, username, profile, location } = props;

  return (
    <div className="photo-list-item" key={id}>
      <img src={imageSource} className="photo" alt={`Photo by ${username}`} />
      <div className="profile-info">
        <img src={profile} className="profile-pic" alt={`${username}'s profile`} />
        <h3>{username}</h3>
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
