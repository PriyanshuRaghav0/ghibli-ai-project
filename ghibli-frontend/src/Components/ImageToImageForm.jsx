// src/components/ImageToImageForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function ImageToImageForm({ onGenerated }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [prompt, setPrompt] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            alert('Please upload an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('prompt', prompt);

        setLoading(true);

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
            );

            const blob = new Blob([response.data], { type: 'image/png' });
            const imageUrl = URL.createObjectURL(blob);
            onGenerated(imageUrl);
        } catch (error) {
            console.error(error);
            alert('❌ Failed to generate image from uploaded image. Please check backend.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card h-100 shadow-sm border-5 border-secondary bg-transparent"
        style={{ backgroundColor: '#' }}>
            <div className="card-body">
                <h5 className="card-title mb-4">Image to Ghibli Style</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Prompt (Optional)</label>
                        <input
                            type="text"
                            className="form-control border-2 rounded-4 border-secondary "
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g. make it look more magical and vivid"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Upload Image</label>
                        <input
                            type="file"
                            className="form-control border-2 rounded-4 border-secondary"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    {preview && (
                        <div className="mb-3 text-center">
                            <img
                                src={preview}
                                alt="Preview"
                                className="img-fluid rounded shadow-sm mb-2"
                                style={{ maxHeight: '150px' }}
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-success w-100 py-2 fw-bold"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Transforming...
                            </>
                        ) : (
                            'Upload & Transform to Ghibli Style'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ImageToImageForm;