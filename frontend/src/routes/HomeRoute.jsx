import React from 'react';

import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import "../styles/HomeRoute.scss";



const HomeRoute = (props) => {
  // Destructure the props for easier access to properties
  const { photos, topics, favourites, onToggleFavourite, onPhotoClick, onTopicClick } = props;
  
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        onTopicClick={onTopicClick}/>
      <PhotoList
        photos={photos}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;