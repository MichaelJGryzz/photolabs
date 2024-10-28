import React from 'react';

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import "../styles/HomeRoute.scss";



const HomeRoute = (props) => {
  // Destructure the props for easier access to properties
  const { photos, topics, favourites, onToggleFavourite } = props;
  
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites}/>
      <PhotoList
        photos={photos}
        favourites={favourites}
        onToggleFavourite={onToggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;