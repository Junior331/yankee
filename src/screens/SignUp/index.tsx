import { useFormik } from "formik";
import { AxiosError } from "axios";
import { View } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect, useCallback } from "react";

import { signUp } from "./services";
import { DataProps, PAGES } from "./@types";
import { stepSchemas } from "./SignUpSchema";
import { useAxiosRequest } from "@/hooks/axiosAdapter";
import { Forms, YourLocation, ProfilePicture } from "@/components/organism";

export const SignUp = () => {
  const router = useRouter();
  const [, setLoading] = useState(false);
  const [verifyForm, setVerifyForm] = useState("phone");
  const { request } = useAxiosRequest<DataProps>();
  const [currentPage, setCurrentPage] = useState(2);

  const formik = useFormik({
    initialValues: {
      email: "",
      gender: "",
      username: "",
      fullname: "",
      password: "",
      dayOfBirth: "",
      phoneNumber: "",
      confirmPassword: "",
    },
    validationSchema: currentPage <= 5 ? stepSchemas[currentPage] : null,
    onSubmit: async (values) => {
      const data = {
        email: values.email,
        gender: values.gender,
        password: values.password,
        username: values.username,
        fullname: values.fullname,
        dayOfBirth: values.dayOfBirth,
        phoneNumber: values.phoneNumber,
      };

      try {
        await signUp({
          data,
          request,
          setLoading,
        });
      } catch (error) {
        const _error = error as AxiosError<{ message: string }>;
        console.error('SignUp Error:', _error?.response?.data?.message || _error?.message);
      }
    },
  });

  const { values, handleChange, handleSubmit, errors, touched, validateForm } =
    formik;

  const adaptHandleChange = useCallback(
    (field: string) => (value: string) => {
      handleChange(field)(value);
    },
    [handleChange]
  );

  const goToNextPage = useCallback(async () => {
    const validationErrors = await validateForm();
    const currentKeys = Object.keys(validationErrors);

    if (currentKeys.length === 0) {
      setCurrentPage((prev) => {
        const nextPage = prev + 1;
        return nextPage;
      });
    }
  }, [validateForm]);

  useEffect(() => {
    setCurrentPage(PAGES.ONE);
  }, []);

  const pages = {
    [PAGES.ONE]: (
      <Forms.CreateUserName
        values={values}
        errors={errors}
        touched={touched}
        handleChange={adaptHandleChange}
        handleSubmit={() => {
          handleSubmit();
          goToNextPage();
        }}
      />
    ),
    [PAGES.TWO]: (
      <Forms.CreateYourAccount
        values={values}
        errors={errors}
        touched={touched}
        handleGoBack={() => setCurrentPage((prev) => prev - 1)}
        handleChange={adaptHandleChange}
        handleSubmit={() => {
          handleSubmit();
          goToNextPage();
        }}
      />
    ),
    [PAGES.THREE]: (
      <Forms.PhoneNumber
        values={values}
        errors={errors}
        touched={touched}
        handleChange={adaptHandleChange}
        handleSubmit={() => {
          handleSubmit();
          goToNextPage();
        }}
      />
    ),
    [PAGES.FOUR]:
      verifyForm === "phone" ? (
        <Forms.VerifyPhoneNumber
          handleChange={(value) => setVerifyForm(value)}
          handleSubmit={() => {
            handleSubmit();
            goToNextPage();
          }}
        />
      ) : (
        <Forms.VerifyEmail
          handleChange={(value) => setVerifyForm(value)}
          handleSubmit={() => {
            handleSubmit();
            goToNextPage();
          }}
        />
      ),
    [PAGES.FIVE]: (
      <YourLocation handleSkip={goToNextPage} handleConfirm={goToNextPage} />
    ),
    [PAGES.SIX]: (
      <ProfilePicture
        handleSkip={goToNextPage}
        handleConfirm={() => router.push("/(public)/signin")}
      />
    ),
  };

  return <View style={{ flex: 1 }}>{pages[currentPage as PAGES]}</View>;
};
