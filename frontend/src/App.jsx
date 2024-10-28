import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute.jsx';
import PhotoDetailsModal from 'routes/PhotoDetailsModal.jsx';
// import mock data
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';

import './App.scss';



const App = () => {
  // Initialize state to keep track of favourited photos
  const [favourites, setFavourites] = useState([]);

  // Function to toggle favourite status for a favourited photo
  const toggleFavourite = (photoId) => {
    setFavourites((prevFavourites) => {
      const newFavourites = prevFavourites.includes(photoId) ? prevFavourites.filter((id) => id !== photoId) : [...prevFavourites, photoId];
      return newFavourites;
    });
  };

  // Initialize state to keep track of clicked photo's Id
  const [clickedPhotoId, setClickedPhotoId] = useState(null);

  // Function to update the state with the Id of the clicked photo
  const handlePhotoClick = (photoId) => {
    setClickedPhotoId(photoId);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        onToggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      {clickedPhotoId && (<PhotoDetailsModal photoId={clickedPhotoId} />)}
    </div>
  );
};

export default App;
