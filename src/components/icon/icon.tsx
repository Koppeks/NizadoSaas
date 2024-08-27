
import { IconTypes } from "@/utils/types/icon.types";
import { forwardRef } from "react";

export const Icon = forwardRef<HTMLElement, IconTypes> (({icon, size, outlineColor,...props}, ref) => {
  return(
    <i className={`${icon} ${size} ${outlineColor}_icon`}></i>
  )
})