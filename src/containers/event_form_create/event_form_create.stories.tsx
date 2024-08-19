
import type { Meta, StoryObj } from "@storybook/react";
import { EventFormCreate } from "./event_form_create";

const meta: Meta = {
  title: "Containers/event form creation",
  component: EventFormCreate,
  parameters:{
    layout: "centered",
    nextjs:{
      appDirectory: true,
      pathname: ""
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const eventformcreate: Story = {
  args:{
    
  }
}