import type { Meta, StoryObj } from "@storybook/react";
import { SelectorTimeFrame } from "./selector_time_frame";

const meta: Meta = {
  title: "Components/Selector/Time from to",
  component: SelectorTimeFrame,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args:{
    timeFrame: "10:20-11:30"
  }
}