import { useReducer } from 'react';


// Insert app actions below
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

const reducer = function(state, action) {
  switch (action.type) {
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
  case ACTIONS.CLOSE_MODAL:
    return {
      ...state,
      clickedPhotoId: null
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
    clickedPhotoId: null // Initialize state to keep track of clicked photo's Id
  });

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
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeModal
  };
};

export default useApplicationData;
