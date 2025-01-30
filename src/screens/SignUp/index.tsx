import { useFormik } from "formik";
import { AxiosError } from "axios";
import PagerView from "react-native-pager-view";
import React, { useState, useRef } from "react";

import { signUp } from "./services";
import { DataProps } from "./@types";
import { Error } from "@/assets/icons";
import { stepSchemas } from "./SignUpSchema";
import { messageConfig } from "@/utils/types";
import { emptyDataMessage } from "@/utils/emptys";
import { useAxiosRequest } from "@/hooks/axiosAdapter";
import { useNavigationHandler } from "@/hooks/navigation";
import { Forms, YourLocation, ProfilePicture } from "@/components/organism";

export const SignUp = () => {
  const { navigate } = useNavigationHandler();
  const [loading, setLoading] = useState(false);
  const [veryfiForm, setVeryfiForm] = useState("phone");
  const { response, request } = useAxiosRequest<DataProps>();
  const [dataMessage, setDataMessage] =
    useState<messageConfig>(emptyDataMessage);
  const [currentPage, setCurrentPage] = useState(0);
  const pagerViewRef = useRef<PagerView>(null);

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
    // validationSchema: currentPage <= 5 ? stepSchemas[currentPage] : null,
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

  const adaptHandleChange = (field: string) => (value: string) =>
    handleChange(field)(value);

  const goToNextPage = async () => {
    const validationErrors = await validateForm();
    const currentKeys = Object.keys(validationErrors);

    if (currentKeys.length === 0) {
      setCurrentPage((prev) => {
        const nextPage = prev + 1;
        pagerViewRef.current?.setPage(nextPage);
        return nextPage;
      });
    }
  };

  return (
    <PagerView
      ref={pagerViewRef}
      style={{ flex: 1 }}
      initialPage={0}
      scrollEnabled={false}
    >
      <Forms.CreateUserName
        key="1"
        values={values}
        errors={errors}
        touched={touched}
        handleChange={adaptHandleChange}
        handleSubmit={() => {
          handleSubmit();
          goToNextPage();
        }}
      />
      <Forms.CreateYourAccount
        key="2"
        values={values}
        errors={errors}
        touched={touched}
        handleChange={adaptHandleChange}
        handleSubmit={() => {
          handleSubmit();
          goToNextPage();
        }}
      />

      <Forms.PhoneNumber
        key="3"
        values={values}
        errors={errors}
        touched={touched}
        handleChange={adaptHandleChange}
        handleSubmit={() => {
          handleSubmit();
          goToNextPage();
        }}
      />

      {veryfiForm === "phone" ? (
        <Forms.VerifyPhoneNumber
          key="4"
          handleChange={(value) => setVeryfiForm(value)}
          handleSubmit={() => {
            handleSubmit();
            goToNextPage();
          }}
        />
      ) : (
        <Forms.VerifyEmail
          key="4"
          handleChange={(value) => setVeryfiForm(value)}
          handleSubmit={() => {
            handleSubmit();
            goToNextPage();
          }}
        />
      )}

      <YourLocation
        key="5"
        handleSkip={goToNextPage}
        handleConfirm={goToNextPage}
      />
      <ProfilePicture
        key="6"
        handleSkip={goToNextPage}
        handleConfirm={() => navigate("Home")}
      />
    </PagerView>
  );
};
