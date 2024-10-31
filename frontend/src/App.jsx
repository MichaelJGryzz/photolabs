import React from 'react';

import HomeRoute from 'routes/HomeRoute.jsx';
import PhotoDetailsModal from 'routes/PhotoDetailsModal.jsx';
import FavedPhotosModal from 'routes/FavedPhotosModal';
// Import custom hook
import useApplicationData from 'hooks/useApplicationData.js';

import './App.scss';



const App = () => {
  // Destructure custom hook to unpack properties
  const {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeSelectedPhotosModal,
    fetchPhotosByTopic,
    openFavedPhotosModal,
    closeFavedPhotosModal
  } = useApplicationData();

  // Retrieve the complete photo object by its id
  const clickedPhoto = state.clickedPhotoId ? state.photoData.find(photo => photo.id === state.clickedPhotoId) : null;

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favourites={state.favourites}
        onToggleFavourite={toggleFavourite}
        onPhotoClick={handlePhotoClick}
        onTopicClick={fetchPhotosByTopic}
        openFavedPhotosModal={openFavedPhotosModal}
      />
      {state.clickedPhotoId && (
        <PhotoDetailsModal
          photo={clickedPhoto}
          closeSelectedPhotosModal={closeSelectedPhotosModal}
          favourites={state.favourites}
          isFavourite={state.favourites.includes(state.clickedPhotoId)}
          onToggleFavourite={toggleFavourite}
        />)}
      {state.favedPhotosModalOpen && (
        <FavedPhotosModal
          photos={state.photoData.filter(photo => state.favourites.includes(photo.id))}
          closeFavedPhotosModal={closeFavedPhotosModal}
          favourites={state.favourites}
          onToggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
