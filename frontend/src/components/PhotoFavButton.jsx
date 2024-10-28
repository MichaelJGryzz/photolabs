import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { id, isFavourite, onToggleFavourite } = props;

  // Link UI interaction to the global state
  const handleToggle = () => {
    onToggleFavourite(id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;