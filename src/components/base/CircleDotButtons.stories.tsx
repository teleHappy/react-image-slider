import type {Meta, StoryObj} from '@storybook/react';
import { ImageSliderContextProvider } from '../../contexts/ImageSliderContextProvider';
import CircleDotButtons from './CircleDotButtons';

import "../../image-slider.css"


const meta: Meta<typeof CircleDotButtons> = {
    title: "Circle Dot Buttons",
    component: CircleDotButtons,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    }
}
