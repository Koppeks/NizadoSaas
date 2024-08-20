import { forwardRef, useState } from "react";
import { Text } from "../text/text";
import { FormikErrors } from "formik";
import { newEventCreation } from "@/containers/event_form_create/event_form_create";

type SelectorCheckboxTypes = {
  options: string[];
  checkboxColor?: "orange" | "black" | "white";
  setFieldValue: (field: string, value: string[], shouldValidate?: boolean) => Promise<void | FormikErrors<newEventCreation>>
};

export const SelectorCheckbox = forwardRef<
  HTMLDivElement,
  SelectorCheckboxTypes
>(({ options, checkboxColor, setFieldValue, ...props }, ref) => {
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckArray = (
    value: string,
    e: React.MouseEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();
    let newChecked
    if (checked.includes(value)) {
      newChecked = checked.filter((check) => check !== value);
      setChecked(newChecked);
    } else {
      newChecked = [...checked, value];
      setChecked(newChecked);
    }
    setFieldValue("repeatedDays", newChecked)
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
