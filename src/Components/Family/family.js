import { findByText } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import VideoCard from '../video-card/video-card';
import './family.css'

const apiKey = process.env.REACT_APP_API_KEY

export default function Family() {
    const [movies, setMovies] = useState([]);
   // const [trailer,setTrailer] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=10751`)
            .then(res => res.json())
            .then(res => (setMovies(res.results)))
    }, [])

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
    //         .then(res => res.json())
    //         .then(res => res.setTrailer)
    // })

    console.log(movies)
    return (
        <div className="familyPage">
            <h1> Movies </h1>
            <div className="videoRow">
            {movies.map(family => <VideoCard key={family.id} movie={family} />)}
            </div>
        </div>
    )
}