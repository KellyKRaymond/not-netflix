import React, { useEffect, useState } from "react";
import banner from '../../assets/banner.jpg';
import VideoCard from '../video-card/video-card';
import './landing-page.css';
// import { fetchMovieData } from "../../NetworkConnections";

const apiKey = process.env.REACT_APP_API_KEY

export default function Landing(props) {
    const [movies, setMovies] = useState([]);
    const [latest, setLatest] = useState([]);

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

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/trending/movie/latest?api_key=${apiKey}&language=en-US=${props.latest}`)
    //         .then(res => res.json())
    //         .then(res => setLatest(res.results))

    // })

console.log(movies)
    return (
        <div className="landing-container">
           <img className="latest-banner" src={banner} ></img>
            <div className="videoRow">
                {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}
