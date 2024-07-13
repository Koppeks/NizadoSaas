
import { InputProps } from "@/utils/types/component.types";
import Image from "next/image";
import { forwardRef, useState } from "react";
import { Text } from "../text/text";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, value, error,handleChange, handleBlur, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    function checkType(typeCheck: string) {
      return typeCheck == "password" && showPassword ? "text" : typeCheck;
    }

    return (
      <div className="preset_input">
        <input
          className="input"
          ref={ref}
          type={`${checkType(type)}`}
          autoComplete="off"
          placeholder=""
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          {...props}
        />
        <Text as="label" className="label">
          {label}
        </Text>
        {type == "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="show_password"
          >
            {showPassword ? (
              <Image
                src={"/Icons/EyeOpen.svg"}
                fill
                alt="Eye open icon of input form"
                className="eyeIcon"
              />
            ) : (
              <Image
                src={"/Icons/EyeClosed.svg"}
                fill
                alt="Eye closed icon of input form"
                className="eyeIcon"
              />
            )}
          </div>
        )}
        {error && <Text as="p" variant="error">{error}</Text>}
      </div>
    );
  }
);


export const InputSearch = forwardRef<HTMLDivElement>(({...props}, ref) => {
  return(
    <div ref={ref} className="preset_input">
      <input
      className="input"
      type="text"
      autoComplete="off"
      placeholder=""
      name="search"
      {...props}
      />
      <Text as="label" className="label">
        Search
      </Text>
      <i className="show_password icon_search"></i>
    </div>
  )
})