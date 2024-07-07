"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { requestSignIn } from "@/utils/api_requests/forms";
import { signInSchema } from "@/utils/schemas/schemas";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { forwardRef } from "react";

export const FormSignIn = forwardRef<HTMLElement>(({ ...props }, ref) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signInSchema}
      onSubmit={async function (
        values: FormikValues,
        formikHelpers: FormikHelpers<FormikValues>
      ): Promise<void | Promise<any>> {
        
        const requestData = { email: values.email, password: values.password };
        const response = await requestSignIn(requestData)

        // ACA

        console.log(response)
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
            type="email"
            label="Email"
            name="email"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={
              touched.email && typeof errors.email == "string"
                ? errors.email
                : ""
            }
            value={values.email}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={
              touched.password && typeof errors.password == "string"
                ? errors.password
                : ""
            }
            value={values.password}
          />
          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </form>
      )}
    </Formik>
  );
});
