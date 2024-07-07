"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { signUpSchema } from "@/utils/schemas/schemas";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { forwardRef } from "react";

export const FormSignUp = forwardRef<HTMLElement>(({ ...props }, ref) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={signUpSchema}
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
          <Input 
            type="text" 
            label="Name" 
            name="name" 
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.name && typeof errors.name == "string" ? errors.name : ""}
            value={values.name}
            />
          <Input 
            type="email" 
            label="Email" 
            name="email" 
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.email && typeof errors.email == "string" ? errors.email : ""}
            value={values.email}
            />
          <Input 
            type="password" 
            label="Password" 
            name="password" 
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.password && typeof errors.password == "string" ? errors.password : ""}
            value={values.password}
            />
          <Input 
            type="password" 
            label="Repeat the password" 
            name="repeatPassword" 
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={touched.repeatPassword && typeof errors.repeatPassword == "string" ? errors.repeatPassword : ""}
            value={values.repeatPassword}
            />
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </form>
      )}
    </Formik>
  );
});
