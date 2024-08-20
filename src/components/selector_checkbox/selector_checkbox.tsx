import { forwardRef, useState } from "react";
import { Text } from "../text/text";

type SelectorCheckboxTypes = {
  options: string[];
  checkboxColor?: "orange" | "black" | "white";
};

export const SelectorCheckbox = forwardRef<
  HTMLDivElement,
  SelectorCheckboxTypes
>(({ options, checkboxColor, ...props }, ref) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckArray = (
    value: string,
    e: React.MouseEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();
    if (checked.includes(value)) {
      const newChecked = checked.filter((check) => check !== value);
      setChecked(newChecked);
    } else {
      const newChecked = [...checked, value];
      setChecked(newChecked);
    }
  };

  return (
    <div className="selector_checkbox">
      {options.map((option, index) => (
        <label
          className={`checkbox-wrapper ${checked.includes(option) ? `selected ${checkboxColor}` : ""}`}
          key={index}
          onClick={(e) => handleCheckArray(option, e)}
        >
          <input
            defaultChecked={checked.includes(option)}
            className="checkbox"
            type="checkbox"
            value={option}
          />
          <Text as="p">{option}</Text>
        </label>
      ))}
    </div>
  );
});
