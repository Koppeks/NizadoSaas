
export type newEventCreation = {
    title: string,
    color: string,
    eventType:string,
    timeFrame: string,
    repeatedDays: string[],
  };

export type newCalendarCreation = {
    title: string,
    description?: string,
    bannedDays?: string[]
  }