import React from 'react';
import waterfall from '../assets/waterfall.jpg';

function HowItWorks() {
    return (
        <section className="container my-5">
            <h2 className="display-6 fw-bold mb-4">How to transform an existing image into Ghibli artwork?</h2>
            <div className="row align-items-center">
                {/* Left Steps */}
                <div className="col-md-6">
                    <div className="row g-3">
                        <div className="col-12">
                            <div className="p-3 bg-dark text-white rounded-4 border border-secondary  w-75 shadow-sm">
                                <h5>1. Open the Restyler</h5>
                                <p>
                                    <a href="#" className="text-info">Click here to open our Restyler tool</a>.<br />
                                    You don't need to download or install anything on your device.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="p-3 bg-dark text-white rounded-4 border w-75 border-secondary shadow-sm">
                                <h5>2. Upload an image</h5>
                                <p>
                                    Upload the image you want to turn into Ghibli Studio-style artwork from your device or your getimg.ai Gallery.
                                </p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="p-3 bg-dark text-white rounded-4 w-75 border border-secondary shadow-sm">
                                <h5>3. Wait</h5>
                                <p>
                                    The "Image to Ghibli" process will start automatically. Simply wait a moment for your image to be restyled.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-md-6 text-center ">
                    <img src={waterfall} alt="Ghibli Waterfall" className="img-thumbnail rounded-4 shadow-lg " />
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
