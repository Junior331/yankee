import { FormikErrors, FormikTouched } from "formik";
import { FormValues } from "@/screens/SignUp/@types";

export type Props = {
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleChange: (field: string) => (value: string) => void;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
};


export interface skipProps {
  handleSkip: () => void;
  handleConfirm: () => void;
}