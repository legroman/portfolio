import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faFacebook,faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons"

export default function Home() {
    return(
            <main id="home">
                <h1 className="lg-heading">Roman <span className="text-secondary">Legun</span></h1>
                <h2 className="sm-heading">Web developer, Programmer, Designer & Entrepreneur</h2>
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg"/></a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} size="lg"/></a>
                    <a href="#"><FontAwesomeIcon icon={faGithub} size="lg"/></a>
                </div>
            </main>
    )
}