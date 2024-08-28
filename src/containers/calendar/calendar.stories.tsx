
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./calendar";

const meta: Meta = {
  title: "Containers/Calendar",
  component: Calendar,
  parameters:{
    layout: "centered",
    nextjs:{
      appDirectory: true,
      pathname: "",
    }
  },
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj<typeof meta>

export const calendar: Story = {
  args:{
    disableDays: ["Tuesday", "Monday"],
    events: [{
      id: "8c32c349-4f17-4ac4-8335-da00c65fee2e",
      title: "Event example 1",
      description: "",
      color: "#6ac51f",
      eventType: "REPETITION",
      lineal: null,
      repetition: {
        repeatedDays: ["Monday", "Sunday", "Tuesday", "Saturday", "Thursday"],
        timeFrame: "22:06-22:30",
        eventId: "8c32c349-4f17-4ac4-8335-da00c65fee2e",
      },
      secuense: null,
      created_at: "2024-08-22T23:08:04.059Z",
      updated_at: "2024-08-22T23:08:04.059Z",
    },
    {
      id: "8c32c349-4f17-4ac4-8335-da00c65fee2q",
      title: "Event example 2",
      description: "",
      color: "red",
      eventType: "REPETITION",
      lineal: null,
      repetition: {
        repeatedDays: ["Saturday"],
        timeFrame: "14:00-19:30",
        eventId: "8c32c349-4f17-4ac4-8335-da00c65fee2q",
      },
      secuense: null,
      created_at: "2024-08-23T23:08:06.059Z",
      updated_at: "2024-08-23T23:08:06.059Z",
    }
  ]
  }
}