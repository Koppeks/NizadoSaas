
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';


const meta: Meta<typeof Input> = {
  title: 'Components/Input/common',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Text: Story = {
  args: {
    type: "text",
    label: "Nombre"
  },
};
export const Password: Story = {
  args: {
    type: "password",
    label: "Contraseña"
  },
};
export const Number: Story = {
  args: {
    type: "number",
    label: "Numero"
  },
};
export const Description: Story = {
  args: {
    type: "text",
    label: "Descripcion"
  },
};
export const Date: Story = {
  args: {
    type: "date"
  },
};