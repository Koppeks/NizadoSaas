import { ButtonRedirect } from "@/components/button/button"
import { InputSearch } from "@/components/input/input"
import { Text } from "@/components/text/text"
import { forwardRef } from "react"


export const AllCalendarManagmentHeader = forwardRef<HTMLElement>(({...props}, ref) => {
  return (
    <section ref={ref} className="Calendar_Managment_Header_Container">
      <Text as="h3">Your calendars</Text>
      <InputSearch/>
      <ButtonRedirect variant="secondary" children="Create new" redirectTo={"/hub/calendar/new"}/>
    </section>
  )
})