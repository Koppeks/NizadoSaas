import type { Meta, StoryObj } from "@storybook/react";
import { HubNavbar } from "./hub_navbar";

const meta: Meta = {
  title: "Containers/Hub menu",
  component: HubNavbar,
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
