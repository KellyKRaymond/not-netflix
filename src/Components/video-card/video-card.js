import './video-card.css';
import { Link } from 'react-router-dom'

export default function VideoCard(props) {

    return (
        <div>
            <div className="video-card">
                <div> {props.movie.title} </div>
                <img src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={`movie poster of ${props.movie.title}`} />
            </div>
            <Link to = {{pathname:`movie/${props.movie.id}`,state: props.movie}}>
                <button> click this </button>
            </Link>
        </div>


    )
}

