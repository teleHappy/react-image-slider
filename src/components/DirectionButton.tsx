import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

type DirectionButtonProps = {
  onClick: () => void;
  direction: string;
};

export default function DirectionButton({
  onClick,
  direction = 'left',
}: DirectionButtonProps) {
  const position = direction === 'left' ? { left: 0 } : { right: 0 };
  const label =
    direction === 'left' ? 'View Previous Image' : 'View Next Image';

  return (
    <button
      onClick={onClick}
      className='img-slider-btn'
      style={position}
      aria-label={label}
    >
      {direction === 'left' && <ArrowBigLeft aria-hidden />}
      {direction === 'right' && <ArrowBigRight aria-hidden />}
    </button>
  );
}
