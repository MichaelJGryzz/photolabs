import React from 'react';

import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';

import "../styles/HomeRoute.scss";



const HomeRoute = (props) => {
  // Destructure the props for easier access to properties
  const { photos, topics } = props;
  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;