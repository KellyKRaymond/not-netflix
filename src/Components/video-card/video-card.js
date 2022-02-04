
import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
// import { fetchMovieData } from "../../NetworkConnections";
import './video-card.css'
import { Link } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY

export default function VideoCard({ movie }) {
    // const { id } = useParams();
    // const { movie, setMovie } = useState(null);
    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
    //         .then(res => {
    //             setMovie(res)
    //         });
    // }, [id])

    return (
        <div>
            <div className="video-card">
                <div> {movie.title} </div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`} />
                <Link to={`/movie/${movie.id}`} state={{ movie }}>
                    <button> click this </button>
                </Link>
            </div>
        </div>
    )
}
