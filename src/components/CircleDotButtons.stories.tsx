import type {Meta, StoryObj} from '@storybook/react';
import "../image-slider.css"
import car1 from "./../imgs/car-1.jpg"
import car2 from "./../imgs/car-2.jpg"
import car3 from "./../imgs/car-3.jpg"
import car4 from "./../imgs/car-4.jpg"
import car5 from "./../imgs/car-5.jpg"

import CircleDotButtons from './CircleDotButtons';

const meta: Meta<typeof CircleDotButtons> = {
    component: CircleDotButtons,
}

export default meta;

type Story = StoryObj<typeof CircleDotButtons>;

export const Default: Story = {
    args: {
        images:[
            { url: car1, alt: "Car One" },
            { url: car2, alt: "Car Two" },
            { url: car3, alt: "Car Three" },
            { url: car4, alt: "Car Four" },
            { url: car5, alt: "Car Five" },
          ],
        imageIndex: 1,
        setImageIndex: () => {}
    }
}
