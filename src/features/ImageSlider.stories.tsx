import type { Meta, StoryObj } from '@storybook/react';
import { ImageSliderContextProvider } from '../contexts/ImageSliderContextProvider';
import { ImageSlider } from './ImageSlider';

import "../image-slider.css"

const meta: Meta<typeof ImageSlider> = {
    title: 'Image Slider Composite',
    component: ImageSlider,
}

export default meta;

type Story = StoryObj<typeof ImageSlider>;

export const Default: Story = {
    args:{}
}