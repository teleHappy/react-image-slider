import { useState } from "react"
import "./image-slider.css"
import DirectionButton from "./components/DirectionButton"
import ImageSliderPanel from "./components/ImageSliderPanel"
import CircleDotButtons from "./components/CircleDotButtons"

type ImageSliderProps = {
  images: {
    url: string
    alt: string
  }[]
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex(index => {
      if (index === images.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return images.length - 1
      return index - 1
    })
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>

      <ImageSliderPanel images={images} imageIndex={imageIndex} />
      
      <DirectionButton onClickHandler={showPrevImage} direction="left"/>
      
      <DirectionButton onClickHandler={showNextImage} direction="right"/>
    
      <CircleDotButtons images={images} setImageIndex={setImageIndex} imageIndex={imageIndex}/>

      <div id="after-image-slider-controls" />
    
    </section>
  )
}
