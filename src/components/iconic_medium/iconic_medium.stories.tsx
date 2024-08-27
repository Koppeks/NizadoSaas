import type { Meta, StoryObj } from "@storybook/react";
import { IconicMedium } from "./iconic_medium";

const meta: Meta<typeof IconicMedium> = {
  title: "Components/IconicMedium",
  component: IconicMedium,
  parameters: {
    layout: "centered",
    nextjs:{
      appDirectory: true,
      pathname: "",
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const IconMedium:Story = {
  args:{
    icon: "calendar_icon_medium"
  }
}