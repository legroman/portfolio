import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
    return(
        <div className="bg">
            <main id="contact">
                <h1 className="lg-heading">Contact<span className="text-secondary"> Me</span></h1>
                <h2 className="sm-heading">This is how you can reach me...</h2>
                <div className="boxes">
                    <div className="box-info"><span className="text-secondary">Email:</span> legromant@gmail.com</div>
                    <div className="box-info"><span className="text-secondary">Phone:</span> (097)755-88-87</div>
                    <div className="box-info"><span className="text-secondary">Address:</span> Ivano-Frankovsk, Ukraine</div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}