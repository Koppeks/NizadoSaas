import { forwardRef, useState } from "react";
import { Text } from "../text/text";
import { FormikErrors } from "formik";
import { newEventCreation } from "@/utils/types/creation.types";

type SelectorTimeFromToTypes = {
  timeFrame: string;
  setFieldValue: (
    field: string,
    value: string,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<newEventCreation>>;
};

export const SelectorTimeFrame = forwardRef<
  HTMLDivElement,
  SelectorTimeFromToTypes
>(({ timeFrame, setFieldValue, ...props }, ref) => {

  const [fromValue, setFromValue] = useState<string>(timeFrame.split("-")[0]);
  const [toValue, setToValue] = useState<string>(timeFrame.split("-")[1]);

  return (
    <div className="selector_timeframe">
      <div className="time">
        <Text as="p">From:</Text>
        <input
          type="time"
          value={fromValue}
          max={"23:59"}
          onChange={(e) => {
            setFromValue(e.target.value)
            setFieldValue("timeFrame", `${e.target.value}-${toValue}`);
          }}
        />
      </div>
      <div className="time">
        <Text as="p">To:</Text>
        <input
          type="time"
          value={toValue}
          max={"23:59"}
          min={fromValue || "00:00"}
          disabled={!fromValue}
          onChange={(e) => {
            setToValue(e.target.value)
            setFieldValue("timeFrame", `${fromValue}-${e.target.value}`);
          }}
        />
      </div>
    </div>
  );
});
