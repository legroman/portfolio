import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import Footer from "../components/Footer";
import photo from "../image/react.jpg";

export default function Work() {
    return (
        <div className="bg">
            <main id="work">
                <h1 className="lg-heading">My<span className="text-secondary"> Work</span></h1>
                <h2 className="sm-heading">Check out some of my projects...</h2>
                <div className="projects">
                    <div className="item">
                        <a href="#!"><img src={photo} alt="photo"/></a>
                        <a href="#!"  className="btn-light"><FontAwesomeIcon icon={faEye} size="lg"/> Project</a>
                        <a href="#!"  className="btn-dark"><FontAwesomeIcon icon={faGithub} size="lg"/> GitHub</a>
                    </div>
                    <div className="item">
                        <a href="#!"><img src={photo} alt="photo"/></a>
                        <a href="#!"  className="btn-light"><FontAwesomeIcon icon={faEye} size="lg"/> Project</a>
                        <a href="#!"  className="btn-dark"><FontAwesomeIcon icon={faGithub} size="lg"/> GitHub</a>
                    </div>
                    <div className="item">
                        <a href="#!"><img src={photo} alt="photo"/></a>
                        <a href="#!"  className="btn-light"><FontAwesomeIcon icon={faEye} size="lg"/> Project</a>
                        <a href="#!"  className="btn-dark"><FontAwesomeIcon icon={faGithub} size="lg"/> GitHub</a>
                    </div>
                    <div className="item">
                        <a href="#!"><img src={photo} alt="photo"/></a>
                        <a href="#!"  className="btn-light"><FontAwesomeIcon icon={faEye} size="lg"/> Project</a>
                        <a href="#!"  className="btn-dark"><FontAwesomeIcon icon={faGithub} size="lg"/> GitHub</a>
                    </div>
                    <div className="item">
                        <a href="#!"><img src={photo} alt="photo"/></a>
                        <a href="#!"  className="btn-light"><FontAwesomeIcon icon={faEye} size="lg"/> Project</a>
                        <a href="#!"  className="btn-dark"><FontAwesomeIcon icon={faGithub} size="lg"/> GitHub</a>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}