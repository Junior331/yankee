import { useFormik } from "formik";
import { AxiosError } from "axios";
import { View } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect, useCallback } from "react";

import { signUp } from "./services";
import { DataProps, PAGES } from "./@types";
import { Error } from "@/assets/icons";
import { stepSchemas } from "./SignUpSchema";
import { messageConfig } from "@/utils/types";
import { emptyDataMessage } from "@/utils/emptys";
import { useAxiosRequest } from "@/hooks/axiosAdapter";
import { Forms, YourLocation, ProfilePicture } from "@/components/organism";

export const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [verifyForm, setVerifyForm] = useState("phone");
  const { response, request } = useAxiosRequest<DataProps>();
  const [dataMessage, setDataMessage] =
    useState<messageConfig>(emptyDataMessage);
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
        setDataMessage((prev) => ({
          ...prev,
          icon: <Error />,
          status: "Error",
          title: "Error !!",
          visible: !prev.visible,
          message: [_error?.response?.data?.message || _error?.message],
        }));
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
    // Valida usando o schema da página atual
    if (currentPage <= 5 && stepSchemas[currentPage]) {
      try {
        await stepSchemas[currentPage].validate(values, { abortEarly: false });
        setCurrentPage((prev) => prev + 1);
      } catch (error) {
        // Se há erros de validação, não avança a página
        console.log('Validation errors:', error);
      }
    } else {
      // Se não há schema para a página, avança normalmente
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, values]);

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
