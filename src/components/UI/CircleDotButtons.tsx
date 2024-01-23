import { Circle, CircleDot } from 'lucide-react';
import { useImageSliderContext } from './../../contexts/ImageSliderContextProvider';

export default function CircleDotButtons () {
  const {imageIndex, setImageIndex, getImages} = useImageSliderContext();
  const images = getImages();
  return (
    <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
  );
}
