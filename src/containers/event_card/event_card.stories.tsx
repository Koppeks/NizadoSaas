import type { Meta, StoryObj } from "@storybook/react";
import { EventCard } from "./event_card";

const meta: Meta = {
  title: "Containers/event card",
  component: EventCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const eventformcreate: Story = {
  args: {
    event: {
      id: "8c32c349-4f17-4ac4-8335-da00c65fee2e",
      title: "eegffffff54444444444444444444444444444444fffffffffffffff",
      description: "",
      color: "#f3f3f3",
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
  },
};
