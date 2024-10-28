import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  // Destructure the props for easier access to properties
  const { photo, closeModal, favourites, isFavourite, onToggleFavourite } = props;

  // Destructure photo object for easier access to properties
  const {
    id,
    urls: { full: imageSource },
    user: { name, profile },
    location,
    similarPhotos
  } = photo;

  // Convert similar_photos from object to array
  const similarPhotosArray = Object.values(similarPhotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
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
        {similarPhotos && (
          <div className="photo-details-modal__similar-photos">
            <h3>Similar Photos</h3>
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
