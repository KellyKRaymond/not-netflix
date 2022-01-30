import './App.css';
import Clicked from './Components/clicked-video-page/clicked-video';
import Header from './Components/header/header';
import Landing from './Components/landing-page/landing-page';
import Search from './Components/search/search';
import Video from './Components/video-card/video-card';
import React, { useState, useEffect } from 'react';

// const apiKey = process.env.REACT_APP_API_KEY

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Clicked/>
        <Landing/>
        <Search />
        <Video/>
      </div>
    </div>
  );
}
export default App;