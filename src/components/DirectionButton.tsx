import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useImageSliderContext } from "./ImageSliderContext";

export interface IDirectionButtonProps {
    direction: string;
}

export default function DirectionButton ({direction}: IDirectionButtonProps) {
    const pos = direction === 'left' ? { left: 0 } : { right: 0 } 
    const arrowBig = direction === 'left' ? <ArrowBigLeft aria-hidden /> : <ArrowBigRight aria-hidden />
    const { showNextImage, showPrevImage } = useImageSliderContext();
    const onClickHandler = direction === 'left' ? showPrevImage : showNextImage; 

    return (
    <button
        onClick={onClickHandler}
        className="img-slider-btn"
        style={pos}
        aria-label="View Previous Image"
      >
        {arrowBig}
      </button>
  );
}
