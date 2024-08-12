"use client"

import { AllCalendarManagmentHeader } from "@/containers/hub/calendar/all_calendar_managment_header/all_calendar_managment_header"
import useStore from "@/redux/UseStore"

export default function All() {

  const allUserCalendars = useStore().userCalendars

  return(
    <main>
      <AllCalendarManagmentHeader/>
      {allUserCalendars.map((calendar)=> (
        <div>
          <h2>{calendar.title}</h2>
        </div>
      ))}
    </main>
  )
}