import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Landing from './Components/landing-page/landing-page';
import Search from './Components/search/search';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path = '/' element={<Landing/>}/>
        </Routes>
          <div>
            <Footer/>
          </div>
      </div>
    </Router>
    );
}

export default App;