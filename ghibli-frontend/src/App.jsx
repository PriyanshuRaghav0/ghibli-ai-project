// src/App.jsx

import React, { useState } from 'react'
import TextToImageForm from './components/TextToImageForm'
import ImageToImageForm from './components/ImageToImageForm'
import ImageResult from './components/ImageResult'

function App() {
  const [imageData, setImageData] = useState(null)

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">🎨 Ghibli AI Image Generator</h1>

      <div className="row g-4">
        <div className="col-md-6">
          <TextToImageForm onGenerated={setImageData} />
        </div>
        <div className="col-md-6">
          <ImageToImageForm onGenerated={setImageData} />
        </div>
      </div>

      {imageData && (
        <div className="mt-5">
          <ImageResult imageData={imageData} />
        </div>
      )}
    </div>
  )
}

export default App
