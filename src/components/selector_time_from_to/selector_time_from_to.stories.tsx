import type { Meta, StoryObj } from "@storybook/react";
import { SelectorTimeFromTo } from "./selector_time_from_to";

const meta: Meta = {
  title: "Components/Selector/Time from to",
  component: SelectorTimeFromTo,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args:{
    from: "",
    to: ""
  }
}