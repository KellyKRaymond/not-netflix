import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/landing-page/landing-page';
import Clicked from './Components/clicked-video-page/clicked-video';


import './App.css';

function App() {
  const [searchString, setSearchString] = useState('');
console.log(searchString)
  return (
    <Router>
      <div>
        <div>
          <Header setSearchString={setSearchString} />
        </div>
        <Routes>
          <Route path = '/' element={<Landing searchString={searchString}/>}/>
          <Route path = '/Movies' element={<Movies/>}/>
          <Route path = '/TV Shows' element={<TvShows/>}/>
          <Route path = '/Kids' element={<Kids/>}>
          <Route path = '/movie/:id' element={<Clicked/>}/>
          </Route>
        </Routes>
          <div>
            <Footer/>
          </div>
      </div>
    </Router>
    );
}

export default App;