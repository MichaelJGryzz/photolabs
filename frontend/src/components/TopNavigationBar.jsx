import React from 'react';

import FavBadge from './FavBadge';
import TopicList from './TopicList';

import '../styles/TopNavigationBar.scss';


const TopNavigation = (props) => {
  // Destructure the props for easier access to properties
  const { topics, favourites, onTopicClick, openFavedPhotosModal } = props;

  // Determine if there are any favourited photos
  const isFavPhotoExist = favourites && favourites.length > 0;
  
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist} openFavedPhotosModal={openFavedPhotosModal}/>
    </div>
  );
};

export default TopNavigation;