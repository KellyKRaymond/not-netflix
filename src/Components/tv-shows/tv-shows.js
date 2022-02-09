import React, {useEffect, useState } from "react";
import VideoCard from "../video-card/video-card";
import './tv-shows.css'

const apiKey = process.env.REACT_APP_API_KEY

export default function TvShows (){
    const [movies, setTvShows] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular/?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(res => (setTvShows(res.results)))
    }, [])

    return (
        <div className="TvShowsPage">
            <h1> Tv Shows </h1>
            <div className="videoRow">
            {movies.map(tvShow => <VideoCard key={tvShow.id} movie={tvShow} />)}
            </div>
        </div>
    )
}
