
export interface IImageSliderPanelProps {
    images: {url: string, alt: string}[];
    imageIndex: number;
}

export default function ImageSliderPanel ({images, imageIndex}: IImageSliderPanelProps) {
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
