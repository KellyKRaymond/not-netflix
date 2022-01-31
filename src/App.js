import './App.css';
import Clicked from './Components/clicked-video-page/clicked-video';
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/landing-page/landing-page';
import Search from './Components/search/search';
import Video from './Components/video-card/video-card';
import React, { useState, useEffect } from 'react';

// const apiKey = process.env.REACT_APP_API_KEY

//  function App() {
//   const [movieTitle, setMovieTitle] = useState([]);
//   const [videoCard, setVideoCard] = useState([]);

//   useEffect(() => {
//     fetch(`https://api.themoviedb.org/3/movie/list?api_key=${apiKey}&language=en-US&query=${movieTitle}`)
//       .then(res => res.json())
//       .then(res => setMovieTitle(res.message))
//   }, [])

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Clicked/>
        <Footer/>
        <Landing/>
        <Search />
        <Video/>
        {/* ({movieTitle.map(movieTitle => <movieTitle key= {movieTitle} movieTitle= {movieTitle}/>)}) */}
      </div>
    </div>
  );
}
 
export default App;