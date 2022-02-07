import React, {useEffect, useState } from "react";
import VideoCard from "../video-card/video-card";
import './movies.css'

const apiKey = process.env.REACT_APP_API_KEY

export default function Movie (){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=movie/{movie.id}`)
            .then(res => res.json())
            .then(res => (setMovies(res.results)))
    }, [])
    console.log(movies)
    return (
        <div className="moviePage">
            <h1> Not Family Friendly Movies! </h1>
            <div className="videoRow">
            {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}
