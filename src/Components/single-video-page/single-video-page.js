import React from "react";
import './single-video-page.css';
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
// import { fetchMovieData } from "../../NetworkConnections";
import VideoCard from "../video-card/video-card";

const apiKey = process.env.REACT_APP_API_KEY

export default function SingleVideoPage({ movie }) {
    const [trailer, setTrailer] = useState([])
    // const { id } = useParams();
    // const { movie, setMovie } = useState(null);
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
    //         .then(res => {
    //             setMovie(res)
    //         });
    // }, [id])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movie}/videos?api_key=${apiKey}&language=en-US`)    
            .then(res => res.json())
            .then(res => setTrailer(res.results))
    })

    let data = useLocation()
    movie = data.state.movie
    return (
        <div>
            <VideoCard movie={movie} single={true} />
            <div className="movie-details">
                <h1> {movie.title} </h1>
                <h2> {movie.overview} </h2>
                <h3> {movie.release_date} </h3>
            </div>
        </div>
    )
}