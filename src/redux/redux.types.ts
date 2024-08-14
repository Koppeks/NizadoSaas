

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


// bannedDays
// : 
// (2) ['Monday', 'Saturday']
// created_at
// : 
// "2024-08-01T02:45:57.392Z"
// description
// : 
// "aaaaaa"
// id
// : 
// "b513b1b4-26e7-425a-9043-a7da115c261e"
// title
// : 
// "rererere"
// updated_at
// : 
// "2024-08-01T02:45:57.392Z"