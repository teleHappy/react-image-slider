import { Circle, CircleDot } from 'lucide-react';

type ImageSliderDotButtonsProps = {
  images: {
    url: string;
    alt: string;
  }[];
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
  imageIndex: number;
};

export default function ImageSliderDotButtons({
  images,
  setImageIndex,
  imageIndex,
}: ImageSliderDotButtonsProps) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '.5rem',
        left: '50%',
        translate: '-50%',
        display: 'flex',
        gap: '.25rem',
      }}
    >
      {images.map((_, index) => (
        <button
          key={index}
          className='img-slider-dot-btn'
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
