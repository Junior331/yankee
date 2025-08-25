import { Alert } from "react-native";
import React, { useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

import * as S from "./styles";
import { Props } from "../@types";
import { Mail, User, Lock } from "@/assets/icons";
import { LayoutAbstract } from "@/components/organism/LayoutAbstract";
import {
  Input,
  Switch,
  Button,
  Checkbox,
  DropDown,
  Datetimepicker,
} from "@/components/elements";

export const CreateYourAccount = ({
  values,
  errors,
  touched,
  handleGoBack,
  handleSubmit,
  handleChange,
}: Props) => {
  const genders = ["Male", "Female", "Other"];
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isFaceIDEnabled, setIsFaceIDEnabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleFaceIDToggle = async (value: boolean) => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert("Error", "Your device does not support Face ID.");
        return;
      }

      const biometricsSupported = await LocalAuthentication.isEnrolledAsync();
      if (!biometricsSupported) {
        Alert.alert(
          "Error",
          "No biometrics configured. Please set up Face ID in your device settings."
        );
        return;
      }

      const authResult = await LocalAuthentication.authenticateAsync({
        promptMessage: "Autentique-se para habilitar o Face ID",
      });

      if (authResult.success) {
        setIsFaceIDEnabled(value);
        Alert.alert("Success", "Face ID has been enabled!");
      } else {
        Alert.alert("Error", "Authentication failed. Face ID not enabled.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during authentication.");
    }
  };

  return (
    <LayoutAbstract
    title="yankee"
    handleOnPressHeader={handleGoBack}
    subTitle="Let’s create your account"
    >
      <S.ContainerInput>
        <Input
          icon={<User />}
          nativeID="fullname"
          value={values.fullname}
          autoComplete="username"
          placeholder={"Full Name"}
          onChangeText={handleChange("fullname")}
        />

        {touched.fullname && errors.fullname && (
          <S.MessageError>{errors.fullname}</S.MessageError>
        )}
      </S.ContainerInput>
      <S.ContainerInput>
        <Input
          icon={<Mail />}
          nativeID="email"
          value={values.email}
          autoComplete="email"
          onChangeText={handleChange("email")}
          placeholder={"Your username or email"}
        />

        {touched.email && errors.email && (
          <S.MessageError>{errors.email}</S.MessageError>
        )}
      </S.ContainerInput>
      <S.ContainerSelect>
        <S.SelectItem>
          <DropDown
            options={genders}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          {touched.gender && errors.gender && (
            <S.MessageError>{errors.gender}</S.MessageError>
          )}
        </S.SelectItem>

        <S.SelectItem>
          <Datetimepicker />
          {touched.dayOfBirth && errors.dayOfBirth && (
            <S.MessageError>{errors.dayOfBirth}</S.MessageError>
          )}
        </S.SelectItem>
      </S.ContainerSelect>

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
      <S.ContainerInput>
        <Input
          icon={<Lock />}
          secureTextEntry
          autoComplete="password"
          nativeID="confirmPassword"
          value={values.confirmPassword}
          placeholder={"Confirm Your Password"}
          onChangeText={handleChange("confirmPassword")}
        />

        {touched.confirmPassword && errors.confirmPassword && (
          <S.MessageError>{errors.confirmPassword}</S.MessageError>
        )}
      </S.ContainerInput>
      <Switch
        label="Enable Face ID"
        isActive={isFaceIDEnabled}
        handleToggle={handleFaceIDToggle}
      />

      <Checkbox
        isChecked={isTermsChecked}
        setIsChecked={setIsTermsChecked}
        label="I agree to the Term & Conditions and Privacy Policy"
      />
      <Button width="100%" onPress={handleSubmit} title={"Submit"} />
    </LayoutAbstract>
  );
};
