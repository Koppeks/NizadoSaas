"use client";

import { Input } from "@/components/input/input";
import { Spliter } from "@/components/spliter/spliter";
import { Text } from "@/components/text/text";
import { Formik, FormikHelpers } from "formik";
import { forwardRef } from "react";
import { SelectorDropdown } from "@/components/selector_dropdown/selector_dropdown";
import { SelectorCheckbox } from "@/components/selector_checkbox/selector_checkbox";

type newEventCreation = {
  title: string;
  color: string;
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
        }}
        onSubmit={function (
          values: newEventCreation,
          formikHelpers: FormikHelpers<newEventCreation>
        ): void | Promise<any> {
          throw new Error("Function not implemented.");
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => {
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
                  />
                  <Spliter
                    spliterColor="blurred"
                    spliterStyle="solid"
                    spliterType="normal"
                  />
                  <div className="added_days">
                    <Text as={"p"}>Select what day you want to be added to the repetition:</Text>
                    <SelectorCheckbox options={daysOfWeek} checkboxColor="orange"/>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    );
  }
);
