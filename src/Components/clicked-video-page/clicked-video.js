import React from "react";
import './clicked-video.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
// import { fetchMovieData } from "../../NetworkConnections";
import VideoCard from "../video-card/video-card";

export default function Clicked(props) {
    const { id } = useParams();
    const { movie, setMovie } = useState(null);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
            .then(res => {
                setMovie(res)
            });
    }, [id])

    return <VideoCard movie={movie} single={true} />
}