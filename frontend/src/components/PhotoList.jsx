import React from "react";
// import PhotoListItem from './PhotoListItem';
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";



const PhotoList = (props) => {
  // Destructure the props for easier access to properties
  const { photos } = props;
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          id={photo.id}
          location={photo.location}
          imageSource={photo.urls.regular}
          username={photo.user.name}
          profile={photo.user.profile}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
