
import type { Meta, StoryObj } from '@storybook/react';
import { SelectCheck } from './select';


const meta: Meta<typeof SelectCheck> = {
  title: 'Components/Input/selectCheck',
  component: SelectCheck,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>;


export const Text: Story = {
  args: {
    options: [
      { id: '1', label: 'Option 1', value: 'option1', checked: false },
      { id: '2', label: 'Option 2', value: 'option2', checked: true },
    ],
    onChange: ()=> {}
  },
};