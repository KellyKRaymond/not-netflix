import React from "react";
import './clicked-video.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { fetchMovieData } from "../../NetworkConnections";
import VideoCard from "../video-card/video-card";


const apiKey = process.env.REACT_APP_API_KEY

export default function Clicked(props) {
    const { id } = useParams();
    const { movie, setMovie } = useState(null);
    useEffect(() => {
        fetchMovieData(`/movie/${id}`)
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