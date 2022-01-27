import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const apiKey ='de804da427140e75c52bb7138208bf26'

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
