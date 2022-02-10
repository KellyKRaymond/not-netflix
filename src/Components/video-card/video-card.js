
import React from "react";
import './video-card.css'
import { Link } from "react-router-dom";

// env file - & gitignore - show on github why we use this 

const apiKey = process.env.REACT_APP_API_KEY

export default function VideoCard({ movie }) {

    return (
        <div>
            <div className="video-card">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`movie poster of ${movie.title}`} />
                <Link to={`/movie/${movie.id}`} state={{ movie }}>
                    <button> click this </button>
                </Link>
            </div>
        </div>
    )
}
