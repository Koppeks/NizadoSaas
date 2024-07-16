import { FieldInputProps, FormikErrors } from "formik";
import { ComponentProps } from "react";

export type InputProps = ComponentProps<"input"> & {
  type: string,
  label?: string,
  name: string,
  value: FieldInputProps<any>["value"],
  error?: FormikErrors<string>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleBlur: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export type TextareaProps = ComponentProps<"textarea"> & {
  label?: string,
  name: string,
  value: FieldInputProps<any>["value"],
  error?: FormikErrors<string>,
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  handleBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}

interface Option {
  id:string;
  value: string;
  label: string;
  checked: boolean;
}

export type SelectProps = {
  options: Option[];
  onChange: (id: string, checked: boolean) => void;
}