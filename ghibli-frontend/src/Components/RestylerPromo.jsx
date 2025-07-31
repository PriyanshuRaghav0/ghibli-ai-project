import React from 'react';
import compareGhibli from '../assets/compareGhibli.png';

function RestylerPromo() {
    return (
        <section className="container my-5">
            <div className="row align-items-center">
                {/* Left: Image comparison */}
                <div className="col-md-6">
                    <div className="rounded-4 overflow-hidden shadow">
                        <img src={compareGhibli} alt="Before and After Ghibli" className="img-fluid" />
                    </div>
                </div>

                {/* Right: Text */}
                <div className="col-md-6">
                    <span className="text-uppercase text-secondary fw-bold">Restyler</span>
                    <h2 className="display-6 fw-bold mt-2">Apply Studio Ghibli style to any image</h2>
                    <p className="lead mt-3 text-light-emphasis">
                        With our AI Restyler feature, you can give your photos a magical makeover. Upload any picture and apply the iconic Studio Ghibli art style in seconds, infusing your images with AI whimsy. It's a fun way to see familiar sights through a new lens and an excellent tool for creating unique social media content or personalized art pieces.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default RestylerPromo;
