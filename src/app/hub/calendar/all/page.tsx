"use client"

import { Calendar_card } from "@/containers/calendar_card/calendar_card"
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
    <main className="QUE">
      <AllCalendarManagmentHeader/>
      <div className="scrolleable_content">
        {isLoading ? <>Loading</> : <>{userCalendars.map((calendar, index)=> 
          <Calendar_card key={index} calendar={calendar}/>
        )}</>}
      </div>
    </main>
  )
}