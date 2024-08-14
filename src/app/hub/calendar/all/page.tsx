"use client"

import { AllCalendarManagmentHeader } from "@/containers/hub/calendar/all_calendar_managment_header/all_calendar_managment_header"
import useStore from "@/redux/UseStore"
import { getAllUserCalendars } from "@/utils/api_requests/calendarForms"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export default function All() {

  const {addCalendars, userCalendars} = useStore()
  const userId = useStore.getState().user?.id
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    
    const fetchCalendars = async ()=> {
      try {
        setIsLoading(true)
        if (typeof userId !== "string" ) {
          throw ({message: "The user ID needs to be a string"})
        }
        const result = await getAllUserCalendars({userId}) as AxiosResponse
        console.log(result.data)
        addCalendars(result.data.payload)
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }

    fetchCalendars()

  },[])

  return(
    <main>
      <AllCalendarManagmentHeader/>
      {isLoading ? <>Loading</> : <>{userCalendars.map((calendar)=> 
        <div>
          <h2>{calendar.title}</h2>
          <p>{calendar.description}</p>
          {typeof calendar.bannedDays !== "undefined" && calendar.bannedDays.map((day, index) => (
            <p key={index}>{day}</p>
          ))}
        </div>
      )}</>}

    </main>
  )
}