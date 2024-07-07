
import type { Meta, StoryObj } from "@storybook/react";
import { NizadoLogo } from "./nizado_logo";

const meta: Meta = {
  title: "Components/Main Logo",
  component: NizadoLogo,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Logo: Story= {
}