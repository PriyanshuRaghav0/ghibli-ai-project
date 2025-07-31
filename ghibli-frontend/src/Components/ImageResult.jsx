// src/components/ImageResult.jsx
import React from 'react';

function ImageResult({ imageData }) {
    return (
        <div className="card shadow">
            <div className="card-body text-center">
                <h3 className="card-title mb-4">🎉 Your Ghibli-style Masterpiece</h3>
                <div className="ghibli-result-container mb-4">
                    <img
                        src={imageData}
                        alt="Generated Ghibli"
                        className="img-fluid rounded shadow-lg"
                        style={{ maxHeight: '500px' }}
                    />
                </div>
                <div className="d-flex justify-content-center gap-3">
                    <a
                        href={imageData}
                        download="ghibli-art.png"
                        className="btn btn-primary px-4"
                    >
                        ⬇️ Download Image
                    </a>
                    <button className="btn btn-outline-secondary px-4">
                        🔄 Generate Another
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageResult;