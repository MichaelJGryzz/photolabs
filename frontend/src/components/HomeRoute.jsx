import React from 'react';

import PhotoList from './PhotoList';
import TopNavigation from './TopNavigationBar';

import "../styles/HomeRoute.scss";



const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default HomeRoute;