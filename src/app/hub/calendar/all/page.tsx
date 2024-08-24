"use client"

import { CalendarCard } from "@/containers/calendar_card/calendar_card"
import { Loader } from "@/containers/loader_container/loader_container"
import { ManagmentHeaderAll } from "@/containers/managment_header_all/managment_header_all"
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
    <main className="all">
      <ManagmentHeaderAll pointer="calendar"/>
      <div className="scrolleable_cards">
        {isLoading ? <Loader/> : <>{userCalendars.map((calendar, index)=> 
          <CalendarCard key={index} calendar={calendar}/>
        )}</>}
      </div>
    </main>
  )
}