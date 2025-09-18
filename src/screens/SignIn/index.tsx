import { useFormik } from "formik";
import { useRouter } from "expo-router";
import React, { useState } from "react";

import * as S from "./styles";
// import { DataProps } from "./@types";
import Colors from "@/constants/Colors";
import signInSchema from "./SignInSchema";
import { messageConfig } from "@/utils/types";
import { emptyDataMessage } from "@/utils/emptys";
import { Button, Input } from "@/components/elements";
import { Mail, Lock, Ellipse3 } from "@/assets/icons";
// import { useAxiosRequest } from "@/hooks/axiosAdapter";
import { LayoutAbstract, ModalGeneric } from "@/components/organism";

export const SignIn = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // const { response, request } = useAxiosRequest<DataProps>();
  const [dataMessage, setDataMessage] =
    useState<messageConfig>(emptyDataMessage);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: signInSchema,
    onSubmit: async () => {
      setLoading(true);
      try {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
            router.push("/(tabs)");
          }, 5000);
        });
      } catch (error) {
        console.log("error ::", error);
      } finally {
        setLoading(false);
      }
    },
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

  return (
    <LayoutAbstract
      title="yankee"
      subTitle="Welcome Back!"
      text="Access your world with us"
    >
      <S.ContainerInput>
        <Input
          icon={<Mail />}
          nativeID="email"
          value={values.email}
          autoComplete="email"
          onFocus={(e) => {
            e.currentTarget.setNativeProps({
              style: { backgroundColor: "#171717" },
            });
          }}
          onChangeText={handleChange("email")}
          placeholder={"Your username or email"}
        />

        {touched.email && errors.email && (
          <S.MessageError>{errors.email}</S.MessageError>
        )}
      </S.ContainerInput>
      <S.ContainerInput>
        <Input
          icon={<Lock />}
          secureTextEntry
          nativeID="password"
          value={values.password}
          autoComplete="password"
          placeholder={"Your Password"}
          onChangeText={handleChange("password")}
        />

        {touched.password && errors.password && (
          <S.MessageError>{errors.password}</S.MessageError>
        )}
      </S.ContainerInput>
      <Button isLoading={loading} onPress={handleSubmit} title={"Sign in"} />
      <S.Text >
        Don’t have an account?
        <S.Text
          color={Colors.dark.bottomColor}
          onPress={() => router.push("/(public)/signup")}
        >
          {" "}
          Sign up now
        </S.Text>
      </S.Text>
      <ModalGeneric
        modalVisible={dataMessage.visible}
        setModalVisible={() =>
          setDataMessage((prev) => ({
            ...prev,
            visible: !prev.visible,
          }))
        }
      >
        {dataMessage.icon || <Ellipse3 />}
        <S.Title>{dataMessage.title}</S.Title>
        {dataMessage.message.length > 0 &&
          dataMessage.message?.map((item, index) => {
            return (
              <S.TextModal
                key={`${item}_${index}`}
                color={
                  dataMessage.status === "Error"
                    ? Colors.dark.error
                    : Colors.dark.textMessage
                }
              >
                {item}
              </S.TextModal>
            );
          })}
        <Button
          title="Fechar"
          onPress={() =>
            setDataMessage((prev) => ({
              ...prev,
              visible: !prev.visible,
            }))
          }
        />
      </ModalGeneric>
    </LayoutAbstract>
  );
};
