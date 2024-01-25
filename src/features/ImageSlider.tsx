import { useEffect, useRef } from "react";
import { useImageSliderContext } from "../contexts/ImageSliderContextProvider";
import DirectionButton from "../components/base/DirectionButton"
import ImageSliderPanel from "../components/base/ImageSliderPanel"
import CircleDotButtons from "../components/base/CircleDotButtons"
import "../image-slider.css"

export function ImageSlider() {

  const timerRef: React.MutableRefObject<NodeJS.Timeout | null> = useRef(null)
  const imageIndex = useImageSliderContext().getImageIndex();
  const showNextImage = useImageSliderContext().showNextImage;

  useEffect(() => {
    if(timerRef.current){
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      showNextImage()
    }, 3000);
    return () => clearTimeout(timerRef.current as NodeJS.Timeout);
  }, [imageIndex])

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
