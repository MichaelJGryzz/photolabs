import { useReducer, useEffect } from 'react';


// Insert app actions below
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_SELECTED_PHOTOS_MODAL: 'CLOSE_SELECTED_PHOTOS_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTO_BY_TOPICS',
  OPEN_FAVED_PHOTOS_MODAL: 'OPEN_FAVED_PHOTOS_MODAL',
  CLOSE_FAVED_PHOTOS_MODAL: 'CLOSE_FAVED_PHOTOS_MODAL'
};

const reducer = function(state, action) {
  switch (action.type) {
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.payload
    };
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favourites: [...state.favourites, action.payload.id]
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favourites: state.favourites.filter(id => id !== action.payload.id)
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      clickedPhotoId: action.payload.id
    };
  case ACTIONS.CLOSE_SELECTED_PHOTOS_MODAL:
    return {
      ...state,
      clickedPhotoId: null
    };
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return {
      ...state,
      photoData: action.payload
    };
  case ACTIONS.OPEN_FAVED_PHOTOS_MODAL:
    return {
      ...state,
      favedPhotosModalOpen: true
    };
  case ACTIONS.CLOSE_FAVED_PHOTOS_MODAL:
    return {
      ...state,
      favedPhotosModalOpen: false
    };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

// Custom Hook
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    favourites: [], // Initialize state to keep track of favourited photos
    clickedPhotoId: null, // Initialize state to keep track of clicked photo's Id
    photoData: [], // Initialize state for photo data
    topicData: [], // Initialize state for topic data
    favedPhotosModalOpen: false // Initialize state for the faved photos modal
  });

  // useEffect hook to fetch the photo data from the API
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type:ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  // useEffect hook to fetch the topic data from the API
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type:ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  // Function to toggle favourite status for a favourited photo
  const toggleFavourite = (photoId) => {
    const actionType = state.favourites.includes(photoId)
      ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, payload: { id: photoId} });
  };

  // Function to update the state with the Id of the clicked photo
  const handlePhotoClick = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { id:photoId } });
  };

  // Function to close the modal by updated the state to null
  const closeSelectedPhotosModal = () => {
    dispatch({ type: ACTIONS.CLOSE_SELECTED_PHOTOS_MODAL });
  };

  // Function to fetch photos by topic id
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type:ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch((error) => console.error(`Error fetching photos for topic ${topicId}:`, error));
  };

  // Helper function to open faved photos modal
  const openFavedPhotosModal = () => dispatch({ type: ACTIONS.OPEN_FAVED_PHOTOS_MODAL });

  // Helper function to close faved photos modal
  const closeFavedPhotosModal = () => dispatch({ type: ACTIONS.CLOSE_FAVED_PHOTOS_MODAL });

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeSelectedPhotosModal,
    fetchPhotosByTopic,
    openFavedPhotosModal,
    closeFavedPhotosModal
  };
};

export default useApplicationData;
