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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, optio velit? Animi culpa cupiditate dolore earum, iure neque odio repudiandae sed? Animi commodi consequuntur dolore ea eaque eius exercitationem facere illum neque nobis odio, possimus praesentium quam repellendus rerum! Accusamus consectetur distinctio doloribus in perferendis? Accusamus culpa explicabo sapiente voluptate!
                        </p>
                    </div>
                    <div className="job job-1">
                        <h3>123 web-shops</h3>
                        <h6>Full Stack Developer</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto blanditiis fuga labore nobis, saepe sunt totam! Deserunt illo impedit magni nesciunt sint sit ut vel.
                        </p>
                    </div>
                    <div className="job job-2">
                        <h3>Designers ABC</h3>
                        <h6>Front End Developer</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet asperiores consectetur consequuntur, cumque dicta facilis fuga fugiat id nam pariatur quam tempore temporibus totam.
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