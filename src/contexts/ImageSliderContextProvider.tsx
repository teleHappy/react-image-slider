

import React, { createContext, useState, useContext } from 'react';

// TODO: App loads images from an API
import car1 from "/car-1.jpg"
import car2 from "/car-2.jpg"
import car3 from "/car-3.jpg"
import car4 from "/car-4.jpg"
import car5 from "/car-5.jpg"

const IMAGES = [
  { url: car1, alt: "Car One" },
  { url: car2, alt: "Car Two" },
  { url: car3, alt: "Car Three" },
  { url: car4, alt: "Car Four" },
  { url: car5, alt: "Car Five" },
]

type image = {
  url: string;
  alt: string;
}

type ImageSliderContextType = {
  imageIndex: number;
  getImages: () => image[];
  showNextImage: () => void;
  showPrevImage: () => void;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>
};

const ImageSliderContext = createContext<ImageSliderContextType | undefined>(undefined);

type ImageSliderContextProviderProps = {
  children: React.ReactNode;
};

export const ImageSliderContextProvider: React.FC<ImageSliderContextProviderProps> = ({ children }) => {
  const [imageIndex, setImageIndex] = useState(0);

  function getImages(){
    return IMAGES;
  }

  function showNextImage() {
    setImageIndex(index => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  }

  return (
    <ImageSliderContext.Provider value={{ imageIndex, getImages, showNextImage, showPrevImage, setImageIndex }}>
      {children}
    </ImageSliderContext.Provider>
  );
};

export function useImageSliderContext() {
  const context = useContext(ImageSliderContext);
  if (context === undefined) {
    throw new Error('useImageSliderContext must be used within a ImageSliderContextProvider');
  }
  return context;
}