import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {
  // Destructure the props for easier access to properties
  const { topics, onTopicClick } = props;
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          label={topic.title}
          onTopicClick={onTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;
