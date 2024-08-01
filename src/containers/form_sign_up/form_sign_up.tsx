"use client";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { requestSignUp } from "@/utils/api_requests/userForms";
import { signUpSchema } from "@/utils/schemas/schemas";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";

export const FormSignUp = forwardRef<HTMLElement>(({ ...props }, ref) => {

  const router = useRouter()

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={signUpSchema}
      onSubmit={async function (
        values: FormikValues,
        formikHelpers: FormikHelpers<FormikValues>
      ): Promise<void | Promise<any>> {
        const userValuesSignUp = {
          username: values.name,
          email: values.email,
          password: values.password,
          repeatPassword: values.repeatPassword
        }
        
        try {
          const response = await requestSignUp(userValuesSignUp)

          if(response.status !== 201){
            //Ideal to make a toast with denial user creation
            throw new Error("Error at user creation");
          }
          setTimeout(() => {
            router.push("/sign-in")
            console.log("You will be redirected in 5 seconds")
          }, 5000)
          //Ideal to make a toast with confirm user creation
          throw new Error("Function not implemented.");
        } catch (error) {
          console.log(error)
        }
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
