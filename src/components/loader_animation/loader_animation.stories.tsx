import type { Meta, StoryObj } from "@storybook/react";
import { LoaderAnimation } from "./loader_animation";

const meta: Meta = {
  title: "Components/loader animation",
  component: LoaderAnimation,
  parameters:{
    layout: "centered"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Loader: Story = {
  
}