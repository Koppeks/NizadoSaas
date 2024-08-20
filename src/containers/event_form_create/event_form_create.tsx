"use client";

import { Input } from "@/components/input/input";
import { Spliter } from "@/components/spliter/spliter";
import { Text } from "@/components/text/text";
import { Formik, FormikHelpers } from "formik";
import { forwardRef } from "react";
import { SelectorDropdown } from "@/components/selector_dropdown/selector_dropdown";
import { SelectorCheckbox } from "@/components/selector_checkbox/selector_checkbox";
import { SelectorTimeFrame } from "@/components/selector_time_from_to/selector_time_frame";
import { Button } from "@/components/button/button";

export type newEventCreation = {
  title: string,
  color: string,
  type:string,
  timeFrame: string,
  repeatedDays: string[],
};

export const EventFormCreate = forwardRef<HTMLDivElement>(
  ({ ...props }, ref) => {
    const eventTypesOptions = ["Repetition", "Lineal", "Secuense"];
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return (
      <Formik
        initialValues={{
          title: "",
          color: "#fff",
          type: "",
          repeatedDays: [],
          timeFrame: "00:00-00:00"
        }}
        onSubmit={function (
          values: newEventCreation,
          formikHelpers: FormikHelpers<newEventCreation>
        ): void | Promise<any> {
          console.log(values)
          throw new Error("Function not implemented.");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }) => {
          return (
            <form className="Event_New_Form_Container" onSubmit={handleSubmit}>
              <div className="general_settings">
                <Text as={"h3"}>General settings</Text>
                <Spliter
                  spliterColor="blurred"
                  spliterStyle="dashed"
                  spliterType="full"
                />
                <div className="general_inputs">
                  <Input
                    value={values.title}
                    type={"text"}
                    label="Title"
                    name={"title"}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <Input
                    value={values.color}
                    type={"text"}
                    label="Color"
                    name={"color"}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="day_settings">
                <Text as={"h3"}>Day settings</Text>
                <Spliter
                  spliterColor="blurred"
                  spliterStyle="dashed"
                  spliterType="full"
                />
                <div className="day_inputs">
                  <SelectorDropdown
                    options={eventTypesOptions}
                    label="Type of event"
                    setFieldValue={setFieldValue}
                  />
                  <Spliter
                    spliterColor="blurred"
                    spliterStyle="solid"
                    spliterType="normal"
                  />
                  <div className="added_days">
                    <Text as={"p"}>Select what day you want to be added to the repetition:</Text>
                    <SelectorCheckbox options={daysOfWeek} checkboxColor="orange" setFieldValue={setFieldValue}/>
                  </div>
                  <Spliter
                    spliterColor="blurred"
                    spliterStyle="solid"
                    spliterType="normal"
                  />
                  <SelectorTimeFrame timeFrame={values.timeFrame} setFieldValue={setFieldValue}/>
                </div>
              </div>
              <Button type="submit" variant="primary" children={"Create this event"}/>
            </form>
          );
        }}
      </Formik>
    );
  }
);
