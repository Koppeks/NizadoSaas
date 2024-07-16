
import type { Meta, StoryObj } from '@storybook/react';
import { InputTextarea } from './textarea';



const meta: Meta<typeof InputTextarea> = {
  title: 'Components/Input/textarea',
  component: InputTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Description: Story = {
  args: {
    label: "Descripcion"
  },
};