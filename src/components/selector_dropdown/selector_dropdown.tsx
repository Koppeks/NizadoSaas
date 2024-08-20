import { forwardRef, useEffect, useRef, useState } from "react";
import { Text } from "../text/text";
import { IconMenuActive } from "../icons/icons";
import { FormikErrors } from "formik";
import { newEventCreation } from "@/containers/event_form_create/event_form_create";

type SelectorDropdownType = {
  label: string,
  options: string[],
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<newEventCreation>>;
};

export const SelectorDropdown = forwardRef<
  HTMLDivElement,
  SelectorDropdownType
>(({ label, options, setFieldValue, ...props }, ref) => {

    const [selectedOption, setSelectedOption] = useState(options[0])
    const [dropdownActive, setDropdownActive] = useState(false)

    const dropdownRef = useRef(null)

    useEffect(() => {

        const handleClickOutside = (event: Event) => {
            if (
                dropdownRef.current &&
              event.target instanceof HTMLElement &&
              !(dropdownRef.current as HTMLElement).contains(event.target)
            ) {
                setDropdownActive(false);
            }
          };
    
          document.addEventListener("mousedown", handleClickOutside);
    
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };

    },[dropdownActive, setDropdownActive])

  return (
    <div ref={dropdownRef} className="selector_dropdown" onClick={() => setDropdownActive(!dropdownActive)}>
      <Text className="dropdown_label" as="p">{label}:</Text>
      <div className="dropdown_container">
        <div className="dropdown_show_selected">
            <Text className="dropdown_selected" as="p">{selectedOption}</Text>
            <IconMenuActive color="orange" active={dropdownActive} />
        </div>
        <div className={`dropdown_table ${dropdownActive && "active"}`}>
          {options.map((option, index) => {
            return (
              <div className="dropdown_option" key={index}>
                <Text onClick={() => {setSelectedOption(option), setFieldValue("type", option)}} as="p">{option}</Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
