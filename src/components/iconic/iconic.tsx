import { IconicProps } from "@/utils/types/component.types";
import { forwardRef } from "react";
import { Text } from "../text/text";


export const Iconic = forwardRef<HTMLElement, IconicProps>(({text, icon, ...props}, ref) => {
  return(
    <span ref={ref} className="preset_iconic">
      <div className="circle">
        <i className={icon}></i>
      </div>
      <Text className="text" as="p">{text !== "" && text}</Text>
    </span>
  )
})
