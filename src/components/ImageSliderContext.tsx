

import React, { createContext, useState, useContext } from 'react';

type ImageSliderContextType = {
  imageIndex: number;
  showNextImage: () => void;
  showPrevImage: () => void;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>
};

const ImageSliderContext = createContext<ImageSliderContextType | undefined>(undefined);

type ImageSliderProviderProps = {
  images: {
    url: string;
    alt: string;
  }[];
  children: React.ReactNode;
};

export const ImageSliderProvider: React.FC<ImageSliderProviderProps> = ({ images, children }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <ImageSliderContext.Provider value={{ imageIndex, showNextImage, showPrevImage, setImageIndex }}>
      {children}
    </ImageSliderContext.Provider>
  );
};

export function useImageSliderContext() {
  const context = useContext(ImageSliderContext);
  if (context === undefined) {
    throw new Error('useImageSliderContext must be used within a ImageSliderProvider');
  }
  return context;
}