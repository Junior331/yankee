import * as yup from "yup";

export const profileSchemas = yup.object().shape({
  nickname: yup
    .string()
    .min(3, "Invalid User, must be 3 or more characters")
    .required("Mandatory User field"),
  name: yup
    .string()
    .min(10, "Invalid Name, must be 10 or more characters")
    .required("Mandatory Name field"),
});