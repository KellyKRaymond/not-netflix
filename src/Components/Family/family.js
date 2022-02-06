import React, { useEffect, useState } from "react";
import VideoCard from '../video-card/video-card';
import './family.css'

const apiKey = process.env.REACT_APP_API_KEY

export default function Family(){
const [family, setFamily] = useState([]);
const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_genres=10751`)
            .then(res => res.json())
            .then(res => (setFamily(res.results)))
    }, [])
    console.log(family)
    return(
        <>
        <h1> hi family friendly videos! </h1>
        ({movies.map(family => <VideoCard key={family.id} family={family} />)})
        </>
    )
}
