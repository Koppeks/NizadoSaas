"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { InputTextarea } from "@/components/input/textarea";
import { Text } from "@/components/text/text";
import useStore from "@/redux/UseStore";
import { createCalendar } from "@/utils/api_requests/calendarForms";
import { calendarSchema } from "@/utils/schemas/schemas";
import { newCalendarCreation } from "@/utils/types/calendar.types";
import { Field, Formik, FormikHelpers } from "formik";
import { forwardRef } from "react";

export const CalendarFormCreate = forwardRef<HTMLElement>(({ ...props }, ref) => {

  const daysOfWeek = [
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' },
  ];

  const user = useStore.getState().user?.id

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        bannedDays: [],
      }}
      validationSchema={calendarSchema}
      onSubmit={async function (
        values: newCalendarCreation,
        formikHelpers: FormikHelpers<newCalendarCreation>
      ): Promise<void | Promise<any>> {
        
        //Logica
        const newCalendarValues = {
          userId: user,
          ...values
        }

        const result = await createCalendar(newCalendarValues)
        console.log(result)

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
        <form className="Calendar_New_Form_Container" onSubmit={handleSubmit}>
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
            value={values.title}
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

          <div className="disable_days_container">
            <Text as="h4">Disable days</Text>
            <div className="days_box">
            {daysOfWeek.map((day) => (
                <label className={`checkbox-wrapper ${values.bannedDays?.includes(day.value) ? 'selected' : ''}`} key={day.value}>
                  <Field className="checkbox" type="checkbox" name="bannedDays" value={day.value} />
                  <Text as="p">{day.label}</Text>
                </label>
            ))}
            </div>
          </div>
          <Button variant="primary" type="submit">
            Create calendar
          </Button>
        </form>
      )}
    </Formik>
  );

});
