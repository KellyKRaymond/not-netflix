import './App.css';
import clicked from './Components/clicked-video-page/clicked-video';
import header from './Components/header/header';
import landing from './Components/landing-page/landing-page';
import search from './Components/search/search';
import video from'./Components/video-card/video-card';
import React, { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_API_KEY

let movieTitle = 'spiderman'
let movieID = 634649 

function App() {
  const [movieTitle, setMovieTitle] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/list?api_key=${apiKey}&language=en-US&query=${movieTitle}`)
      .then(res => res.json())
      .then(res => setMovieTitle(res.message))
  }, [])

  return (
      <div className="App">
        <h1> this is a test </h1>
    </div>
  );
}

export default App;
