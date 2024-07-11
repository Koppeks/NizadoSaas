import type { Meta, StoryObj } from "@storybook/react";
import { HubMenu } from "./hub_menu";

const meta: Meta = {
  title: "Containers/Hub menu",
  component: HubMenu,
  parameters:{
    layout: "centered",
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const form : Story= {
  args:{

  }
}
