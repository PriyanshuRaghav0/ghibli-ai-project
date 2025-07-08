// src/components/TextToImageForm.jsx

import React, { useState } from 'react'
import axios from 'axios'

function TextToImageForm({ onGenerated }) {
    const [prompt, setPrompt] = useState('')
    const [style, setStyle] = useState('anime')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/generate-from-text',
                { prompt, style },
                { responseType: 'arraybuffer' }
            )

            const blob = new Blob([res.data], { type: 'image/png' })
            const imageUrl = URL.createObjectURL(blob)
            onGenerated(imageUrl)
        } catch (err) {
            console.error(err)
            alert('❌ Failed to generate image. Please check the backend.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5 className="mb-3">Text to Image</h5>
            <div className="mb-3">
                <label className="form-label">Prompt</label>
                <input
                    type="text"
                    className="form-control"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g. A magical forest with glowing creatures"
                    required
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Style</label>
                <input
                    type="text"
                    className="form-control"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    placeholder="anime"
                />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Generating...' : 'Generate Image'}
            </button>
        </form>
    )
}

export default TextToImageForm
