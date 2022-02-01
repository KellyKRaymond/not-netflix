import React, {useEffect , useState} from "react";
import filler from '../../assets/filler.jpg';
import VideoCard from '../video-card/video-card';
import Footer from '../footer/footer';
import './landing-page.css';

const apiKey = process.env.REACT_APP_API_KEY

export default function Landing() {
    const [movieTitle, setMovieTitle] = useState('spiderman');
    const [movies, setMovies] = useState([]);
    const [videoCard, setVideoCard] = useState([]);

    useEffect(() => {
        // fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&language=en-US&query=${movieTitle}`)
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(res => setMovies(res.results))
    }, [])

        return (
        
            <div className="landing-container">
                <div> hello world </div>
                <img className="fillerImg" src={filler} ></img>
                ({movies.map(movie => <VideoCard key={movie} movie={movie} />)})
            </div>
        )
}