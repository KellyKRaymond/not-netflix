import React from "react";
import './clicked-video.css';
import { usedParams, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import VideoCard from "../video-card/video-card";

const apiKey = process.env.REACT_APP_API_KEY

export default function Clicked() {
    const { id } = useParams();
    const { movie, setMovie } = useState(null);

    const overview = this.props.location.useState
    const poster_path = this.props.location.useState

    return movie && <div key={movie.id}>
        <>
            <h1>{movie.title}</h1>
            <h2>{movie.tagline}</h2>
        </>
    </div>
}