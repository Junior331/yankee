import * as yup from "yup";

export const stepSchemas = [
  yup.object().shape({
    username: yup
      .string()
      .min(3, "Invalid Username, must be 3 or more characters")
      .required("Mandatory Username field"),
  }),
  yup.object().shape({
    fullname: yup
      .string()
      .min(10, "Invalid Full Name, must be 10 or more characters")
      .required("Mandatory Full Name field"),
    email: yup
      .string()
      .email("Invalid e-mail.")
      .required("Mandatory e-mail field"),
    password: yup
      .string()
      .min(8, "Invalid password, must be 8 or more characters")
      .matches(/[a-z]/, "At least one lowercase char")
      .matches(/[A-Z]/, "At least one uppercase char")
      .required("Mandatory password field"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], `Passwords don't match.`)
      .required("Mandatory confirm password field"),
  }),
  yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, "Invalid phone number")
      .required("Mandatory phone number field"),
  }),
];
