import DirectionButton from "./components/DirectionButton"
import ImageSliderPanel from "./components/ImageSliderPanel"
import CircleDotButtons from "./components/CircleDotButtons"
import { ImageSliderProvider } from "./components/ImageSliderContext"
import "./image-slider.css"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <ImageSliderProvider images={images}>

        <ImageSliderPanel images={images}  />
        
        <DirectionButton direction="left"/>
        
        <DirectionButton direction="right"/>
      
        <CircleDotButtons images={images} />

      </ImageSliderProvider>
      <div id="after-image-slider-controls" />
    
    </section>
  )
}
