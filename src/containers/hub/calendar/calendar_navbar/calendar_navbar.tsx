import { ButtonRedirect } from "@/components/button/button";
import { InputSearch } from "@/components/input/input";
import { Text } from "@/components/text/text";
import { forwardRef } from "react";


export const CalendarNavbar = forwardRef<HTMLDivElement> (({...props}, ref) => {
  return (
    <nav ref={ref}>
      <Text as="h5">Calendar</Text>
      <InputSearch/>
      <ButtonRedirect variant="secondary" redirectTo="/hub/calendar/new" >Create new</ButtonRedirect>
    </nav>
  )
})