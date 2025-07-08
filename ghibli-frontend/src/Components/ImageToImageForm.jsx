// src/components/ImageToImageForm.jsx

import React, { useState } from 'react'
import axios from 'axios'

function ImageToImageForm({ onGenerated }) {
    const [file, setFile] = useState(null)
    const [prompt, setPrompt] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!file) {
            alert('Please upload an image.')
            return
        }

        const formData = new FormData()
        formData.append('image', file)
        formData.append('prompt', prompt)

        setLoading(true)

        try {
            const response = await axios.post(
                'http://localhost:8080/api/v1/generate',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    responseType: 'arraybuffer',
                }
            )

            const blob = new Blob([response.data], { type: 'image/png' })
            const imageUrl = URL.createObjectURL(blob)
            onGenerated(imageUrl)
        } catch (error) {
            console.error(error)
            alert('❌ Failed to generate image from uploaded image. Please check backend.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5 className="mb-3">Image to Ghibli Style</h5>

            <div className="mb-3">
                <label className="form-label">Prompt</label>
                <input
                    type="text"
                    className="form-control"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. make it look more magical and vivid"
                    required
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Upload Image</label>
                <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                />
            </div>

            <button type="submit" className="btn btn-success w-100" disabled={loading}>
                {loading ? 'Generating...' : 'Upload & Generate'}
            </button>
        </form>
    )
}

export default ImageToImageForm
