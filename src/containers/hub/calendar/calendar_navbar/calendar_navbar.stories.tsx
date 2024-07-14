import type { Meta, StoryObj } from "@storybook/react";
import { CalendarNavbar } from "./calendar_navbar";

const meta: Meta = {
  title: "Containers/Hub/Calendar/Navbar",
  component: CalendarNavbar,
  parameters:{
    layout: "fullscreen",
    nextjs:{
      appDirectory: true
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const form : Story= {
  args:{

  }
}
