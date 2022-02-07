import React, { useState } from "react";
import { GoSearch } from 'react-icons/go'
import './header.css';
import notnetflixlogo from '../../assets/notnetflixlogo.png'
import { Link } from "react-router-dom";

export default function Header(props) {
const [value, setValue] = useState('')

const searchForMovie = () =>{
    props.setSearchString(value.toLowerCase())
    setValue('')
}
    return (
        <div className="nav-container">
            <div>
            <Link to='/'><img className="logo" src={notnetflixlogo}></img></Link>
            </div>
            <div className="header-list" id="Links">
            <Link className ='textFormatted' to='/movies'>Movies</Link> 
            <Link className ='textFormatted' to='/tv-Shows'> TV Shows</Link> 
            <Link className ='textFormatted' to='/Family'> Family </Link>    
            <Link className ='textFormatted' to='/MyList'> My List</Link>  
                <div className="search-bar">
                <input type='text' value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Seach Videos Here..."></input>
                <button onClick={searchForMovie} className="magnifyGlass"><GoSearch /></button>
            </div>
            </div>
        </div>
    )
}
