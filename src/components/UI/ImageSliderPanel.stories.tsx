import type {Meta, StoryObj} from '@storybook/react';
import { ImageSliderContextProvider } from '../../contexts/ImageSliderContextProvider';
import "../../image-slider.css"

import ImageSliderPanel from './ImageSliderPanel';

const meta: Meta<typeof ImageSliderPanel> = {
    title: "Image Slider Panel",
    component: ImageSliderPanel,
    decorators: [story => <ImageSliderContextProvider>{story()}</ImageSliderContextProvider>]

}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    }
}
