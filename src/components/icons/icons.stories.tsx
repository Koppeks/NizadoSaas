
import type { Meta, StoryObj } from '@storybook/react';
import { IconMenuActive } from './icons';

const meta: Meta= {
  title: 'Components/Buttons/Normal',
  component: IconMenuActive,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Icon: Story = {
  args: {

  },
};
