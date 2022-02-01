import React, { useEffect, useState } from "react";

import filler from '../../assets/filler.jpg';
import VideoCard from '../video-card/video-card';
import Footer from '../footer/footer';
import './landing-page.css';

const apiKey = process.env.REACT_APP_API_KEY

export default function Landing(props) {
    const [movies, setMovies] = useState([]);
    const [videoCard, setVideoCard] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(res => setMovies(res.results))
    }, [])

    useEffect(() => {
        if(props.searchString){
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=en-US&query=${props.searchString}`)
            .then(res => res.json())
            .then(res => setMovies(res.results))
        }
    }, [props.searchString])
console.log(movies)
    return (
        <div className="landing-container">
            <img className="fillerImg" src={filler} ></img>
            <div className="videoRow">
                ({movies.map(movie => <VideoCard key={movie.id} movie={movie} />)})
            </div>
        </div>
    )
}

// https://api.themoviedb.org/3/discover/movie?api_key=$%7BapiKey%7D&language=en-US&sort_by=popularity.desc&with_genres=$%7BgenreId%7D`)