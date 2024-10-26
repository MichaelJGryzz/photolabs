import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFav, setIsFav] = useState(false);

  // toggle the favourite state
  const toggleFav = () => {
    setIsFav((prev) => !prev);
    console.log("Icon clicked! isFav is now:", !isFav); // Log for testing
  };

  return (
    <div className="photo-list__fav-icon" onClick={toggleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFav} displayAlert={false} />
      </div>
    </div>
  );
};

export default PhotoFavButton;