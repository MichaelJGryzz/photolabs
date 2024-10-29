import React from "react";
// import PhotoListItem from './PhotoListItem';
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  // Destructure the props for easier access to properties and provide a deafult value for 'favourites'
  const { photos, favourites = [], onToggleFavourite, onPhotoClick = false } = props;
  
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
