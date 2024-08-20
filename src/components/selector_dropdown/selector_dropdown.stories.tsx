import type { Meta, StoryObj } from "@storybook/react";
import { SelectorDropdown } from "./selector_dropdown";

const meta: Meta = {
  title: "Components/Selector/Dropdown",
  component: SelectorDropdown,
  parameters: {
    layout: "centered"
  },
  argTypes:{
    options: {
      options: ["option 1", "option 2", "option 3"],
      control: {type: "select"}
    },
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args:{
    label: "Some label",
    options: ["option 1", "option 2", "option 3"]
  }
}