import type { Meta, StoryObj } from "@storybook/react";
import { HubMenu } from "./hub_menu";

const meta: Meta = {
  title: "Containers/Hub/Menu",
  component: HubMenu,
  parameters:{
    layout: "fullscreen"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const form : Story= {
  args:{

  }
}
