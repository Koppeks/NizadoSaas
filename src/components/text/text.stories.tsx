
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },  
  argTypes:{
    variant: {
      options: ["error", "small"],
      control: {type: "select"}
    },
    textColor: {
      options: ["white", "orange", "red", "blue"],
      control: {type: "select"}
    }
  },

  /**  variant?: "error" | "small",
  blur?: boolean,
  redirect?: string,
  textColor?: "white" | "orange" | "red" | "blue" */
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    as: "p",
    children: "Hola"
  },
};