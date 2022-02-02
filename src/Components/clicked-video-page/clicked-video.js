import React from "react";
import './clicked-video.css';
import {usedParams, useParams} from 'react-router-dom';
import { useState } from "react/cjs/react.development";

export default function Clicked(){
    const {id} = useParams();
    const {movie, setMovie} = useState({});
    fetchMovieData(`/movie/${id}`)
    return(
        <div> elo </div>
    )
}
    