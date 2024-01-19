import { ArrowBigLeft, ArrowBigRight } from "lucide-react";


export interface IDirectionButtonProps {
    onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
    direction: string;
}

export default function DirectionButton ({onClickHandler, direction}: IDirectionButtonProps) {
    const pos = direction === 'left' ? { left: 0 } : { right: 0 } 
    const arrowBig = direction === 'left' ? <ArrowBigLeft aria-hidden /> : <ArrowBigRight aria-hidden />
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
