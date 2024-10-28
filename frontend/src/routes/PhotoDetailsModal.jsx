import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  // Destructure the props for easier access to properties
  const { photo, closeModal } = props;

  // Destructure photo object for easier access to properties
  const {
    id,
    urls: { full: imageSource },
    user: { name, profile },
    location
  } = photo;

  // Log photoId to the console (for now)
  console.log(id, imageSource, name, profile, location);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
