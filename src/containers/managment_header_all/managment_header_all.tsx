import { ButtonRedirect } from "@/components/button/button"
import { InputSearch } from "@/components/input/input"
import { Text } from "@/components/text/text"
import { forwardRef } from "react"


export const ManagmentHeaderAll = forwardRef<HTMLElement, {pointer: string}>(({pointer ,...props}, ref) => {
  return (
    <section ref={ref} className="Managment_Header_All_Container">
      <Text as="h3">Your {pointer}</Text>
      <InputSearch/>
      <ButtonRedirect variant="secondary" children="Create new" redirectTo={`/hub/${pointer}/new`}/>
    </section>
  )
})