import DirectionButton from "./UI/DirectionButton"
import ImageSliderPanel from "./UI/ImageSliderPanel"
import CircleDotButtons from "./UI/CircleDotButtons"
import { ImageSliderContextProvider } from "../contexts/ImageSliderContextProvider"
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
      <ImageSliderContextProvider images={images} imageIndex={0}>

        <ImageSliderPanel images={images}  />
        
        <DirectionButton direction="left"/>
        
        <DirectionButton direction="right"/>
      
        <CircleDotButtons images={images} />

      </ImageSliderContextProvider>
      <div id="after-image-slider-controls" />
    
    </section>
  )
}
