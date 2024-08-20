import type { Meta, StoryObj } from "@storybook/react";
import { SelectorCheckbox } from "./selector_checkbox";

const meta: Meta = {
  title: "Components/Selector/Checkbox",
  component: SelectorCheckbox,
  parameters: {
    layout: "centered"
  },
  argTypes:{
    options: {
      options: ["option 1", "option 2", "option 3"],
      control: {type: "select"}
    },
    checkboxColor: {
      options: ["orange", "white", "black", "red", null],
      control: {type: "select"}
    },
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args:{
    options: ["option 1", "option 2", "option 3", "option 4"],
    checkboxColor: "orange"
  }
}