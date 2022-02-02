import React from "react";
import './clicked-video.css';
import {usedParams, useParams} from 'react-router-dom';
import { useState , useEffect} from "react/cjs/react.development";
import VideoCard from "../video-card/video-card";

export default function Clicked(){
    const {id} = useParams();
    const {movie, setMovie} = useState(null);

    useEffect(() => {
        fetchMovieData(`/movie/${id}`)
        setMovie(res)
        .then(res => {
    });
    },[id])
    return(
        <VideoCard movie={movie}/>
    )
}
    