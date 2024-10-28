import React from "react";

import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  // Destructure the props for easier access to properties
  const { id, imageSource, username, profile, location, isFavourite, onToggleFavourite } = props;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        id={id}
        isFavourite={isFavourite}
        onToggleFavourite={onToggleFavourite}
      />
      <img src={imageSource} className="photo-list__image" alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" alt={`${username}'s profile`} />
        <div className="photo-list__user-info">
          <h3 >{username}</h3>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
