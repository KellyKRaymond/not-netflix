import React from "react";
import filler from '../../assets/filler.jpg'
import './landing-page.css';

export default function Landing() {
    return (
        <div className="landing-container">
            <div> hello world </div>
            <img className="fillerImg" src= {filler} ></img>
        </div>
    )
    }