"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Text } from "@/components/text/text";
import { forgotPasswordSchema } from "@/utils/schemas/schemas";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { forwardRef } from "react";

export const FormForgotPassword = forwardRef<HTMLElement>(({ ...props }, ref) => {
  return (
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={forgotPasswordSchema}
      onSubmit={function (
        values: FormikValues,
        formikHelpers: FormikHelpers<FormikValues>
      ): void | Promise<any> {

        console.log(values);
        formikHelpers.resetForm();

        throw new Error("Function not implemented.");
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
        <form className="Form_Sign_Up_Container" onSubmit={handleSubmit}>
          <Text as="p" variant="small">*We will send a recovery token to the email that you provide.</Text>
          <Input 
            type="email" 
            label="Email" 
            name="email" 
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.email && typeof errors.email == "string" ? errors.email : ""}
            value={values.email}
            />
          <Button variant="primary" type="submit">
            Recover the account
          </Button>
        </form>
      )}
    </Formik>
  );
});
