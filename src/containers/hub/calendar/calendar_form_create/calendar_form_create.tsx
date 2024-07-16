"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { SelectCheck } from "@/components/input/select";
import { InputTextarea } from "@/components/input/textarea";
import { calendarSchema } from "@/utils/schemas/schemas";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { forwardRef } from "react";

export const CalendarFormCreate = forwardRef<HTMLElement>(({ ...props }, ref) => {

  const options = [
    { id: '1', label: 'Option 1', value: 'option1', checked: false },
    { id: '2', label: 'Option 2', value: 'option2', checked: true },
    // Add more options as needed
  ];

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        options
      }}
      validationSchema={calendarSchema}
      onSubmit={async function (
        values: FormikValues,
        formikHelpers: FormikHelpers<FormikValues>
      ): Promise<void | Promise<any>> {
        
        //Logica
        console.log(values)

      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
        values,
      }) => (
        <form className="Form_Sign_Up_Container" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Title"
            name="title"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={
              touched.title && typeof errors.title == "string"
                ? errors.title
                : ""
            }
            value={values.email}
          />
          <InputTextarea
            label="Description"
            name="description"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.description && typeof errors.description == "string"
              ? errors.description
              : ""}
            value={values.description}/>

          <SelectCheck options={options} onChange={handleChange} />;

          <Button variant="primary" type="submit">
            Create calendar
          </Button>
        </form>
      )}
    </Formik>
  );

});
