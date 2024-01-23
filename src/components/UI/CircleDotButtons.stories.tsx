import type {Meta, StoryObj} from '@storybook/react';
import "../../image-slider.css"

import CircleDotButtons from './CircleDotButtons';

const meta: Meta<typeof CircleDotButtons> = {
    component: CircleDotButtons,
    title: "Circle Dot Buttons"
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        
    }
}
