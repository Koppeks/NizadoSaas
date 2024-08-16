import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./loader_container";


const meta: Meta = {
  title: "Containers/Loader",
  component: Loader,
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
