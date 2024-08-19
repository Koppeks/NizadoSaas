import type { Meta, StoryObj } from "@storybook/react";
import { DropdownSelector } from "./dropdown_selector";

const meta: Meta = {
  title: "Components/Dropdown selector",
  component: DropdownSelector,
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