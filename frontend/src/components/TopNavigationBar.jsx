import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';


const TopNavigation = (props) => {
  // Destructure the props for easier access to properties
  const { topics, favourites } = props;

  // Determine if there re any favourited photos
  const isFavPhotoExist = favourites && favourites.length > 0;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;