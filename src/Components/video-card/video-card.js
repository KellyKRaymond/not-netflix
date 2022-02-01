import React from "react";
import './video-card.css';

export default function VideoCard(props) {
    return (
        <div className="video-card">
            <div> {props.movie.title} </div>
            <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={`movie poster of ${props.movie.title}`}/>
        </div>

    )
}

