import DirectionButton from "./UI/DirectionButton"
import ImageSliderPanel from "./UI/ImageSliderPanel"
import CircleDotButtons from "./UI/CircleDotButtons"
import "../image-slider.css"

export function ImageSlider() {

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      
        <ImageSliderPanel />
        
        <DirectionButton direction="left"/>
        
        <DirectionButton direction="right"/>
      
        <CircleDotButtons />

      <div id="after-image-slider-controls" />
    
    </section>
  )
}
