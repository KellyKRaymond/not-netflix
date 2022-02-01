import React from "react";
import './header.css';
import notnetflixlogo from '../../assets/notnetflixlogo.png'

export default function Header() {
    return (
        <div className="nav-container">
            <div className="header-list">
                <a> Movies </a>
                <a> TV Shows </a>
                <a> Kids </a>
                <a> My List </a>
                <img className="logo" src={notnetflixlogo}></img>
            </div>
            <div className="search-bar">
                <input type='text'placeholder="Seach Videos Here..."></input>
            </div>
        </div>
    )
}
