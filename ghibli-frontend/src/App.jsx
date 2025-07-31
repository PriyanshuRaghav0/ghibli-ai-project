// src/App.jsx
import React, { useState } from 'react';
import TextToImageForm from './components/TextToImageForm';
import ImageToImageForm from './components/ImageToImageForm';
import ImageResult from './components/ImageResult';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HowItWorks from './components/HowItWorks';
import RestylerPromo from './components/RestylerPromo';


// Ghibli-style example images
import example1 from './assets/ghibli.jpg';
import example2 from './assets/anime3.jpg';
import example3 from './assets/ghibli4.jpg';
import example4 from './assets/Ghibli-studio.png';

function App() {
    const [imageData, setImageData] = useState(null);

    return (
        <div className="ghibli-app">
            <Navbar />

            {/* 🔽 Ghibli Background Behind Content */}
            <div
                style={{
                    backgroundImage: `url(${example4})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    paddingTop: '50px',
                    paddingBottom: '50px',
                }}
            >
                <main className="container py-5 bg-white bg-opacity-75 rounded-4 shadow-lg">
                    {/* --- Your content stays the same --- */}

                    <div className="row align-items-center mb-5">
                        <div className="col-md-6 text-start">
                            <h1 className="display-4 fw-bold mb-3 font-monospace">
                                Generate & Restyle Images in Ghibli Style
                            </h1>
                            <p className="lead mb-4 font-monospace">
                                Bring your Ghibli dreams to life
                            </p>
                        </div>

                        <div className="col-md-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="example-card shadow-sm rounded border-5 overflow-hidden">
                                        <img src={example1} alt="Example 1" className="img-thumbnail w-100" />
                                        <div className="p-2">
                                            <p className="mb-0 fw-bold">"Whimsical Town"</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="example-card shadow-sm rounded border-start border-5 overflow-hidden">
                                        <img src={example2} alt="Example 2" className="img-fluid" />
                                        <div className="p-2">
                                            <p className="mb-0 fw-bold">"Enchanted Forest"</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="example-card shadow-sm rounded border-5 border-top border-start-0 overflow-hidden">
                                        <img src={example3} alt="Example 3" className="img-thumbnail w-100" />
                                        <div className="p-2">
                                            <p className="mb-0 fw-bold">"Magical Character"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Forms Section */}
                    <div className="row g-4">
                        <div className="col-md-6">
                            <TextToImageForm onGenerated={setImageData} />
                        </div>
                        <div className="col-md-6">
                            <ImageToImageForm onGenerated={setImageData} />
                        </div>
                    </div>

                    {/* Result Section */}
                    {imageData && (
                        <div className="mt-5">
                            <ImageResult imageData={imageData} />
                        </div>
                    )}
                </main>
            </div>

            <HowItWorks />
            <RestylerPromo />
            <Footer />
        </div>
    );
}


export default App;
