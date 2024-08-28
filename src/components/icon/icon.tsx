
import { IconTypes } from "@/utils/types/icon.types";
import { forwardRef } from "react";

export const Icon = forwardRef<HTMLElement, IconTypes> (({icon, size, outlineColor, className, onClick, ...props}, ref) => {
  return(
    <i onClick={onClick} className={`${icon} ${size} ${outlineColor}_icon ${className}`}></i>
  )
})