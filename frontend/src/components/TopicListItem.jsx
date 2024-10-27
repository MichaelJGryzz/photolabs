import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  // Destructure the props for easier access to properties
  const { label } = props;

  return (
    <div className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
