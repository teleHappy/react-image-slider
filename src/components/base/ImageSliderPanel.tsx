import { useImageSliderContext } from "../../contexts/ImageSliderContextProvider";


export default function ImageSliderPanel () {
  const { imageIndex } = useImageSliderContext();
  const { getImages } = useImageSliderContext()
  const images = getImages();

  return (
    <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
  );
}
