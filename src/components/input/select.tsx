import { forwardRef } from "react";
import { SelectProps } from "@/utils/types/inputs.types";

export const SelectCheck = forwardRef<HTMLInputElement, SelectProps>(
  ({ options, onChange, ...props }, ref) => {

    const handleChange = (id: string, checked: boolean) => {
      onChange(id, checked)
    }

    console.log(options)

    return (
      <div>
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="checkbox"
            checked={option.checked}
            onChange={(e) => handleChange(option.id, e.target.checked)}
          />
          {option.label}
        </label>
      ))}
    </div>
    );
  }
);