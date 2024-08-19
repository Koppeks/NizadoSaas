import type { Meta, StoryObj } from "@storybook/react";
import { CalendarFormCreate } from "./calendar_form_create";


const meta: Meta = {
  title: "Containers/Hub/Calendar/Create Form",
  component: CalendarFormCreate,
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
