import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[0-9]).{5,}$/;

const signUpSchema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Needs to be a email")
    .required("This field is required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message: "Password needs to have 5 letters, one uppercase and one number",
    })
    .required("This field is required"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "The passwords should be the same")
    .required("This field is required"),
});

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Needs to be a email")
    .required("This field is required"),
  password: yup
    .string()
    .matches(passwordRules, {
      message: "Password needs to have 5 letters, one uppercase and one number",
    })
    .required("This field is required")
});

const forgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Needs to be a email")
    .required("This field is required")
});

const calendarSchema = yup.object({
  title: yup.string().required("This field is required"),
  description: yup.string().max(2000, "The description its to large - 2000")
})


export { signInSchema, signUpSchema, forgotPasswordSchema, calendarSchema };
