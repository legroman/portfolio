import React from "react";
import photo from "../image/portrait.jpg";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="bg">
            <main id="about">
                <h1 className="lg-heading">About<span className="text-secondary"> Me</span></h1>
                <h2 className="sm-heading">Let me tell you a few things...</h2>
                <div className="about-info">
                    <div className="photo"><img src={photo} alt="Roman Legun" className="bio-image"/></div>
                    <div className="bio">
                        <h3 className="text-secondary">Bio</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam cum deleniti distinctio
                            dolorem laboriosam minima ratione, tempore temporibus voluptatibus. Aliquid at beatae cum ex
                            nemo optio porro sapiente temporibus.
                        </p>
                    </div>
                    <div className="job job-1">
                        <h3>123 web-shops</h3>
                        <h6>Full Stack Developer</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error labore quo!
                        </p>
                    </div>
                    <div className="job job-2">
                        <h3>Designers ABC</h3>
                        <h6>Front End Developer</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error labore quo!
                        </p>
                    </div>
                    <div className="job job-3">
                        <h3>Web-works</h3>
                        <h6>Graphic Designer</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut error labore quo!
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}