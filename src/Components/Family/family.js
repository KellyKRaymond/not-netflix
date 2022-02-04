import React, { useEffect, useState } from "react";
import VideoCard from '../video-card/video-card';
import './family.css'

const apiKey = process.env.REACT_APP_API_KEY

export default function Family(){
const [family, setFamily] = useState([]);

    useEffect(() => {
        fetch(`https://www.themoviedb.org/genre/10751-family/movie/?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(res => (setFamily(res.results)))
    }, [])
    
    return(
        <>
        <h1> hi family friendly videos! </h1>
        <div className="family-container"></div>
            ({family.map(family => <VideoCard key={family.id} family={family} />)})
            
        </>

    )

}