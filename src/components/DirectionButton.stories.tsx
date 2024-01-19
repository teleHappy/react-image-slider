import type {Meta, StoryObj} from '@storybook/react';

import DirectionButton from './DirectionButton';

const meta: Meta<typeof DirectionButton> = {
    component: DirectionButton,
}

export default meta;

type Story = StoryObj<typeof DirectionButton>;

export const Default: Story = {
    args: {
        onClickHandler: () => {},
        direction:'left',
    }
}