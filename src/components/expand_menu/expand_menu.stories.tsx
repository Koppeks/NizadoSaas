import type { Meta, StoryObj } from "@storybook/react";
import { ExpandMenu } from "./expand_menu";

const meta: Meta = {
  title: "Components/Expandible menu",
  component: ExpandMenu,
  parameters: {
    layout: "centered"
  },
  argTypes:{
    aligned: {
      options: ["left", "center", "right"],
      control: {type: "select"}
    },
    elements: {
      control: {type: "object"},
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const First: Story = {
  args:{
    menuTitle: "Titulo 1",
    aligned: "left",
    elements: [
      {text: "menu 1", href: "direccion 1"},
      {text: "menu 2", href: "direccion 2"},
      {text: "menu 3", href: "direccion 3"},
      {text: "menu 4", href: "direccion 4"},
    ]
  }
}