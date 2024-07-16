import { forwardRef } from "react";
import { Text } from "../text/text";
import { TextareaProps } from "@/utils/types/inputs.types";

export const InputTextarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, name, value, error,handleChange, handleBlur, ...props }, ref) => {
    return (
      <div className="preset_textarea">
        <textarea
          className="textarea"
          ref={ref}
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
        {error && <Text as="p" variant="error">{error}</Text>}
      </div>
    );
  }
);