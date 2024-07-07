
import type { Meta, StoryObj } from '@storybook/react';
import {ButtonRedirect} from './button';

const meta: Meta<typeof ButtonRedirect> = {
  title: 'Components/Buttons/Redirect',
  component: ButtonRedirect,
  parameters: {
    layout: 'centered',
    nextjs:{
      appDirectory: true,
      pathname: "",
    }
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Click me",
    redirectTo: "/home"
  },
};
