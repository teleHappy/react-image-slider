import type {Meta, StoryObj} from '@storybook/react';
import { ImageSliderContextProvider } from '../../contexts/ImageSliderContextProvider';
import "../../image-slider.css"

import CircleDotButtons from './CircleDotButtons';

const meta: Meta<typeof CircleDotButtons> = {
    title: "Circle Dot Buttons",
    component: CircleDotButtons,
    decorators: [story => <ImageSliderContextProvider>{story()}</ImageSliderContextProvider>]

}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    }
}
