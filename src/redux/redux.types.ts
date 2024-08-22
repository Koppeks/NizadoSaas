export type User = {
  id: string,
  username: string,
  email: string,
  avatar: string,
  subscription: string,
  verified: boolean,
  created_at: string,
  updated_at: string,
}

export interface UserSlice {
  user: User | null
  addUser: (user : User) => void
  removeUser: () => void
}

export type Calendar = {
  id: string,
  title: string,
  description?: string,
  bannedDays?: string[],
  created_at: string,
  updated_at: string,
}

export interface CalendarSlice {
  userCalendars: Calendar[],
  addCalendar: (calendar:Calendar) => void,
  addCalendars: (newCalendars:Calendar[]) => void,
  // removeCalendar: (calendarId:string) => void,
  // getCalendar: (calendarId: string) => Calendar,
  // editCalendar: (calendarId: string, editFields: object) => void
}

export type Event = {
  id: string,
  title: string,
  description?: string,
  eventType: string,
  color:string,
  repetition?:{
    repeatedDays: string[],
    timeFrame: string
  },
  lineal?:{
    from: string,
    to: string,
  },
  secuense?:{
    multipleFrom: string[],
    multipleTo: string[]
  },
  created_at: string,
  updated_at: string,
}

export interface EventSlice{
  userEvents: Event[],
  addEvent: (event:Event)=> void,
  addEvents: (events:Event[]) => void
}