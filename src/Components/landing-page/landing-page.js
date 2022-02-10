import React, { useEffect, useState } from "react";
import banner from '../../assets/banner.jpg';
import VideoCard from '../video-card/video-card';
import './landing-page.css';

const apiKey = process.env.REACT_APP_API_KEY

export default function Landing(props) {
    const [movies, setMovies] = useState([]);
    const [latest, setLatest] = useState([]);
    const [action, setAction] = useState([]);
    const [comedy, setComedy] = useState([]);
    const [romance,setRomance] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(res => setMovies(res.results))
    }, [])
    console.log(movies)

    useEffect(() => {
        if(props.searchString){
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=en-US&query=${props.searchString}`)
            .then(res => res.json())
            .then(res => setMovies(res.results))
        }
    }, [props.searchString])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=28`)
            .then(res => res.json())
            .then(res => (setAction(res.results)))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=35`)
            .then(res => res.json())
            .then(res => (setComedy(res.results)))
    }, [])
 
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=10749`)
            .then(res => res.json())
            .then(res => (setRomance(res.results)))
    }, [])

console.log(movies)
    return (
        <div className="landing-container">
               <div className="latest-banner" ></div>
               <h1> Trending Movies</h1>
            <div className="videoRow">
                {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
                <h1> Action </h1>
            <div className="videoRow">
                {action.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
                <h1> Comedy </h1>
            <div className="videoRow">
                {comedy.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
                <h1> Romance</h1>
            <div className="videoRow">
                {romance.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}
