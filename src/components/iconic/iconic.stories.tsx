import type { Meta, StoryObj } from "@storybook/react";
import { Iconic } from "./iconic";

const meta: Meta<typeof Iconic> = {
  title: "Components/Iconic",
  component: Iconic,
  parameters: {
    layout: "centered"
  },
  argTypes:{
    icon: {
      options: ["icon_user", "icon_gear", "icon_bell"],
      control: {type: "select"}
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const NoText:Story = {
  args:{
    text: "",
    icon: "icon_gear"
  }
}
export const WithText:Story = {
  args:{
    icon: "icon_user",
    text: "Sign In"
  }
}