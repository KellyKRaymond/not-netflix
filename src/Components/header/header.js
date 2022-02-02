import React, { useState } from "react";
import { GoSearch } from 'react-icons/go'
import './header.css';
import notnetflixlogo from '../../assets/notnetflixlogo.png'

export default function Header(props) {
const [value, setValue] = useState('')

const searchForMovie = () =>{
    props.setSearchString(value.toLowerCase())
    setValue('')
}
    return (
        <div className="nav-container">
            <div>
            <img className="logo" src={notnetflixlogo}></img>
            </div>
            <div className="header-list">
                <a> Movies </a>
                <a> TV Shows </a>
                <a> Family </a>
                <a> My List </a>
                <div className="search-bar">
                <input type='text' value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Seach Videos Here..."></input>
                <button onClick={searchForMovie} className="magnifyGlass"><GoSearch /></button>
            </div>

            </div>
        </div>
    )
}
