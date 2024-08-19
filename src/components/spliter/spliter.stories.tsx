
import type { Meta, StoryObj } from "@storybook/react";

import { Spliter } from "./spliter";

const meta: Meta = {
  title: "Components/spliter",
  component: Spliter,
  parameters:{
    layout: "padded"
  },
  argTypes:{
    spliterStyle: {
      options: ["solid", "dotted", "dashed"],
      control: {type: "select"}
    },
    spliterType: {
      options: ["normal", "full"],
      control: {type: "select"}
    },
    spliterColor: {
      options: ["blurred", "strong"],
      control: {type: "select"}
    },
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const spliter: Story = {
  args:{
    spliterStyle: "solid",
    spliterType: "normal",
    spliterColor: "blurred",
  }
}
