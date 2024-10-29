import React from 'react';

import HomeRoute from 'routes/HomeRoute.jsx';
import PhotoDetailsModal from 'routes/PhotoDetailsModal.jsx';
// Import mock data
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';
// Import custom hook
import useApplicationData from 'hooks/useApplicationData.js';

import './App.scss';



const App = () => {
  // Destructure custom hook to unpack properties
  const {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
  } = useApplicationData();

  // Retrieve the complete photo object by its id
  const clickedPhoto = state.clickedPhotoId ? photos.find(photo => photo.id === state.clickedPhotoId) : null;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={state.favourites}
        onToggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
      />
      {state.clickedPhotoId && (
        <PhotoDetailsModal
          photo={clickedPhoto}
          closeModal={closeModal}
          favourites={state.favourites}
          isFavourite={state.favourites.includes(state.clickedPhotoId)}
          onToggleFavourite={toggleFavourite}
        />)}
    </div>
  );
};

export default App;
