
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarCard } from "./calendar_card";

const meta: Meta = {
  title: "Containers/calendar card",
  component: CalendarCard,
  parameters:{
    layout: "centered"
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const eventformcreate: Story = {
  args:{
    
  }
}