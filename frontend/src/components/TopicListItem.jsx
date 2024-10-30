import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  // Destructure the props for easier access to properties
  const { label, id, onTopicClick } = props;

  return (
    <div className="topic-list__item" onClick={() => onTopicClick(id)}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
