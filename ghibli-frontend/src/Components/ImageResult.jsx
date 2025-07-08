// src/components/ImageResult.jsx

import React from 'react'

function ImageResult({ imageData }) {
  return (
    <div className="text-center">
      <h5 className="mb-3">🎉 Your Ghibli-style Image is Ready</h5>
      <img src={imageData} alt="Generated Ghibli" className="img-fluid rounded shadow" />
      <div className="mt-3">
        <a href={imageData} download="ghibli-image.png" className="btn btn-outline-secondary">
          ⬇️ Download Image
        </a>
      </div>
    </div>
  )
}

export default ImageResult
