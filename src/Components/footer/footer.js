import React from "react";
import { SiNetflix } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'
import './footer.css'

export default function Footer() {
    return (
        <div className="footerContainer">
            <h1> FAQ Cookie Preferences Help Center Corporate Information Terms Of Use Privacy  </h1>
            <div id="appIcons">
                <div className="Twitter"><SiTwitter /></div>
                <div className="Netflix"><SiNetflix /></div>
            </div>
        </div>
    )
}