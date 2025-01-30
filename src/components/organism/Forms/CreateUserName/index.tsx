import React from "react";

import * as S from "./styles";
import { Props } from "../@types";
import { User } from "@/assets/icons";
import Colors from "@/constants/Colors";
import { Button, Input } from "@/components/elements";
import { LayoutAbstract } from "@/components/organism";
import { useNavigationHandler } from "@/hooks/navigation";

export const CreateUserName = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
}: Props) => {
  const { navigate } = useNavigationHandler();

  return (
    <LayoutAbstract
      subTitle="Welcome to Yankee!"
      text="Join now—your best experience awaits!"
    >
      <S.ContainerInput>
        <Input
          icon={<User />}
          nativeID="username"
          value={values.username}
          autoComplete="username"
          placeholder={"Create Your Username"}
          onChangeText={handleChange("username")}
        />

        {touched.username && errors.username && (
          <S.MessageError>{errors.username}</S.MessageError>
        )}
      </S.ContainerInput>
      <Button width="100%" onPress={handleSubmit} title={"Sign up"} />
      <S.Text>
        Do you have an account?
        <S.Text
          color={Colors.dark.bottomColor}
          onPress={() => navigate("SinIn")}
        >
          {" "}
          Sign in now
        </S.Text>
      </S.Text>
    </LayoutAbstract>
  );
};
