import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered"
  },
  argTypes:{
    icon: {
      options: ["calendar_icon", "calendar_day_icon", "clock_icon"],
      control: {type: "select"}
    },
    size: {
      options: ["small", "medium", "big"],
      control: {type: "select"}
    },
    outlineColor: {
      options: [undefined, "white", "orange"],
      control: {type: "select"}
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Normal:Story = {
  args:{
    icon: "calendar_icon",
    size: "small",
    outlineColor: undefined,
  }
}
