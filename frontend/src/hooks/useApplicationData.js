import { useState } from 'react';



// Custom Hook
const useApplicationData = () => {
  const [state, setState] = useState({
    favourites: [], // Initialize state to keep track of favourited photos
    clickedPhotoId: null, // Initialize state to keep track of clicked photo's Id

  });

  // Function to toggle favourite status for a favourited photo
  const toggleFavourite = (photoId) => {
    setState((prevState) => {
      const newFavourites = prevState.favourites.includes(photoId) ? prevState.favourites.filter((id) => id !== photoId) : [...prevState.favourites, photoId];
      return { ...prevState, favourites: newFavourites };
    });
  };

  // Function to update the state with the Id of the clicked photo
  const handlePhotoClick = (photoId) => {
    setState((prevState) => ({ ...prevState, clickedPhotoId: photoId }));
  };

  // Function to close the modal by updated the state to null
  const closeModal = () => {
    setState((prevState) => ({ ...prevState, clickedPhotoId: null }));
  };

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeModal
  };
};

export default useApplicationData;
