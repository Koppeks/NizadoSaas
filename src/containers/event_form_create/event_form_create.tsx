"use client";

import { Input } from "@/components/input/input";
import { Spliter } from "@/components/spliter/spliter";
import { Text } from "@/components/text/text";
import { newEventCreation } from "@/utils/types/event.types";
import { Formik, FormikHelpers } from "formik";
import { forwardRef } from "react";

export const EventFormCreate = forwardRef<HTMLDivElement>(
  ({ ...props }, ref) => {
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
        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit
        }) => {
          return (
            <form className="Event_New_Form_Container" onSubmit={handleSubmit}>
                <div className="general_settings">
                <Text as={"h3"}>General settings</Text>
                <Spliter spliterColor="blurred" spliterStyle="dashed" spliterType="full"/>
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
            </form>
          );
        }}
      </Formik>
    );
  }
);
