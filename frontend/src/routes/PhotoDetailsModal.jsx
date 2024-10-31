import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  // Destructure the props for easier access to properties
  const { photo, closeSelectedPhotosModal, favourites, isFavourite, onToggleFavourite } = props;

  // Destructure photo object for easier access to properties
  const {
    id,
    urls: { full: imageSource },
    user: { name, profile },
    location,
    similar_photos
  } = photo;

  // Convert similar_photos from object to array
  const similarPhotosArray = Object.values(similar_photos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeSelectedPhotosModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          id={id}
          isFavourite={isFavourite}
          onToggleFavourite={onToggleFavourite}
        />
        <img src={imageSource} alt={name} className="photo-details-modal__image"/>
        <div className="photo-list__user-details">
          <img src={profile} className="photo-list__user-profile" alt={`${name}'s profile`} />
          <div className="photo-list__user-info">
            <h3>{name}</h3>
            <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
          </div>
        </div>
        {similar_photos && (
          <div className="photo-details-modal__similar-photos">
            <h3>Related Photos</h3>
            <PhotoList
              photos={similarPhotosArray}
              favourites={favourites}
              onToggleFavourite={onToggleFavourite}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
