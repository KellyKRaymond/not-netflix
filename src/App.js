import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/landing-page/landing-page';
import SingleVideoPage from './Components/single-video-page/single-video-page';
import Movie from "./Components/movie/movie";
import Family from "./Components/Family/family";
import TV from "./Components/tv-shows/tv-shows";

import './App.css';

function App() {
  const [searchString, setSearchString] = useState('');

  return (
    <Router>
      <div>
        <div>
          <Header setSearchString={setSearchString} />
         
        </div>
        <Routes>
          <Route path = '/' element={<Landing searchString={searchString}/>}/>
          <Route path = '/movie/:id' element={<SingleVideoPage/>}/>
          <Route path = '/movies' element={<Movie/>}/>
          <Route path = '/tv-shows' element={<TV/>}/>
          <Route path = '/family' element={<Family/>}>
          </Route>
        </Routes>
          <div>
            
          </div>
      </div>
    </Router>
    );
}

export default App;