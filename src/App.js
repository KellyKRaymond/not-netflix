import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/landing-page/landing-page';

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
        </Routes>
          <div>
            <Footer/>
          </div>
      </div>
    </Router>
    );
}

export default App;