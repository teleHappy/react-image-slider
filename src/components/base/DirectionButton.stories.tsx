import type {Meta, StoryObj} from '@storybook/react';
import { ImageSliderContextProvider } from '../../contexts/ImageSliderContextProvider';
import DirectionButton from './DirectionButton';

import "../../image-slider.css"

const meta: Meta<typeof DirectionButton> = {
    title: "Direction Button",
    component: DirectionButton,
    decorators: [story => <ImageSliderContextProvider>{story()}</ImageSliderContextProvider>]
}

export default meta;

type Story = StoryObj<typeof DirectionButton>;

export const Default: Story = {
    args: {
        direction:'left',
    }
}