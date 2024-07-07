import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta: Meta = {
  title: "Containers/Navbar",
  component: Navbar,
  parameters:{
    layout: "fullscreen",
    nextjs:{
      appDirectory: true,
      pathname: "",
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const userNotLog: Story = {
  args:{
    userLoged: false
  }
}
export const UserLog: Story = {
  args:{
    userLoged: true
  }
}