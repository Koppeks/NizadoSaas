import { InputProps } from "@/utils/types/component.types"
import Image from "next/image"
import { forwardRef, useState } from "react"

export const Input = forwardRef<HTMLInputElement, InputProps>(({label, type, ...props}, ref) => {

  const [showPassword, setShowPassword] = useState(false)

  function checkType(typeCheck : string) {
    return (typeCheck == "password" && showPassword) ? "text" : typeCheck
  }

  return (
    <div className="preset_input">
      <input className="input" ref={ref} type={`${checkType(type)}`} autoComplete="off" placeholder=""  {...props} />
      <label className="label">{label}</label>
      {type == "password" && 
        <div onClick={() => setShowPassword(!showPassword)} className="show_password">
          {showPassword ? 
            <Image
              src={"/Icons/EyeOpen.svg"}
              fill
              alt="Eye open icon of input form"
              className="eyeIcon"
            /> 
            : 
            <Image
              src={"/Icons/EyeClosed.svg"}
              fill
              alt="Eye closed icon of input form"
              className="eyeIcon"
            />
            }
        </div>
      }
    </div>
  )
})
