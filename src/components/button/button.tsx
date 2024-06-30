import { ButtonProps } from "@/utils/types/component.types"
import { forwardRef } from "react"

const Button = forwardRef<HTMLButtonElement, ButtonProps> (
  ({variant, children}, ref) => {
    return <button ref={ref} className={`preset_button ${variant}`}>{children}</button>
  }
)

export default Button