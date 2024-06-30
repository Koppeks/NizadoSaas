
import type { Meta, StoryObj } from '@storybook/react';
import Button from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click me"
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Click me"
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Click me"
  },
};
