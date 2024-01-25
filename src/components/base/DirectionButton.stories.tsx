import type {Meta, StoryObj} from '@storybook/react';
import { ImageSliderContextProvider } from '../../contexts/ImageSliderContextProvider';
import DirectionButton from './DirectionButton';

import "../../image-slider.css"

const meta: Meta<typeof DirectionButton> = {
    title: "Direction Button",
    component: DirectionButton
}

export default meta;

type Story = StoryObj<typeof DirectionButton>;

export const Default: Story = {
    args: {
        direction: 'left',
    }
}

export const Right: Story = {
    args: {
        direction: 'right',
    }
}
