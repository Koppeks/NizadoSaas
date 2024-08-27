import { IconicPropsMedium } from "@/utils/types/component.types";
import { forwardRef } from "react";



export const IconicMedium = forwardRef<HTMLDivElement, IconicPropsMedium>(({icon, ...props}, ref) => {
  
  return(
    <div ref={ref} className="preset_iconic_medium" >
      <i className={icon}></i>
    </div>
  )
})
