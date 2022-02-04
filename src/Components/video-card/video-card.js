
import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
// import { fetchMovieData } from "../../NetworkConnections";
import VideoCard from "../video-card/video-card";
import './video-card.css'

const apiKey = process.env.REACT_APP_API_KEY

export default function Clicked(props) {
    const { id } = useParams();
    const { movie, setMovie } = useState(null);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
            .then(res => {
                setMovie(res)
            });
    }, [id])
    
    return <VideoCard movie={movie}/>
    //     <div>
    //     <>
    //         <h1>{movie.title}</h1>
    //         <h2>{movie.tagline}</h2>
    //     </>
    // </div>
    }
