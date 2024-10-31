import React from 'react';

import '../styles/FavedPhotosModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const FavedPhotosModal = (props) => {
  // Destructure the props for easier access to properties
  const { photos, closeFavedPhotosModal, favourites, onToggleFavourite } = props;

  return (
    <div className="faved-photos-modal">
      <button className="faved-photos-modal__close-button" onClick={closeFavedPhotosModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="faved-photos-modal__images">
        <h2>Your Favourites</h2>
        <PhotoList
          photos={photos} // Pass liked photos directly
          favourites={favourites}
          onToggleFavourite={onToggleFavourite}
        />
      </div>
    </div>
  );
};

export default FavedPhotosModal;