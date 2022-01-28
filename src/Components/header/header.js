import React from "react";
import './header.css';
import notnetflixlogo from '../../assets/notnetflixlogo.png'

export default function header(){
    return (
    <div className="headerText"> 
        <img className="notNetflixLogo" src={notnetflixlogo}></img>
    </div>
    )
}
