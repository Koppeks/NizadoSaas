import { Event } from "@/redux/redux.types";

export interface CalendarProps {
  disableDays: ("Sunday" | "Monday"| "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday")[],
  events?: Event[]
}