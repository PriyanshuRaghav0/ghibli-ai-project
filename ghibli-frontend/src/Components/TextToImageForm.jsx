// src/components/TextToImageForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function TextToImageForm({ onGenerated }) {
    const [prompt, setPrompt] = useState('');
    const [style, setStyle] = useState('ghibli');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(
                'http://localhost:8080/api/v1/generate-from-text',
                { prompt, style },
                { responseType: 'arraybuffer' }
            );

            const blob = new Blob([res.data], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(blob);
            onGenerated(imageUrl);
        } catch (err) {
            console.error(err);
            alert('❌ Failed to generate image. Please check the backend.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card h-100 shadow-sm border-4 border-secondary bg-transparent"
         style={{ backgroundColor: '#F9F3EF' }}
         >
            <div className="card-body">
                <h5 className="card-title mb-4">Text to Ghibli Art</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Prompt</label>
                        <textarea
                            className="form-control rounded-3 border-2 border-secondary"
                            rows="3"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g. A magical forest with glowing creatures!"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Style</label>
                        <select
                            className="form-select boder-2 border-secondary rounded-3"
                            value={style}
                            onChange={(e) => setStyle(e.target.value)}
                        >
                            <option value="ghibli">Ghibli Style</option>
                            <option value="anime">Anime</option>
                            <option value="fantasy">Fantasy</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 py-2 fw-bold"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Generating...
                            </>
                        ) : (
                            'Generate Image'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TextToImageForm;