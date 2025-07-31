// src/context/ImageContext.jsx
import { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ImageContext = createContext();

export function ImageProvider({ children }) {
    const [generatedImages, setGeneratedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ImageContext.Provider value={{ generatedImages, setGeneratedImages, isLoading, setIsLoading }}>
            {children}
        </ImageContext.Provider>
    );
}