import './App.css';
import header from './Components/header/header';
import landing from './Components/landing-page/landing-page';
import search from './Components/search/search';
import video from'./Components/video-card/video-card';
import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_API_KEY
console.log(apiKey)
function App() {

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then(res => res.json())
      .then(res => console.log(res))
  }, [])

  return (
    <div className="App">
      <h1> this is a test </h1>
    </div>
  );
}

export default App;
