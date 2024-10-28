import React from 'react';

import HomeRoute from 'components/HomeRoute';
// import mock data
import photos from './mocks/photos.js';
import topics from './mocks/topics.js';

import './App.scss';



const App = () => {
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  );
};

export default App;
