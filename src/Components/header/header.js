import React from "react";
import './header.css';
import notnetflixlogo from '../../assets/notnetflixlogo.png'

export default function header() {
    return (
        <div className="nav-container">
            <div className="header">
                <img className="logo" src={notnetflixlogo.png}>
                </img>
            </div>
        </div>

    )
}
