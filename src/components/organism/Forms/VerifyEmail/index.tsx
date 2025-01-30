import React from "react";

import * as S from "./styles";
import { Props } from "./@types";
import Colors from "@/constants/Colors";
import { LayoutAbstract } from "@/components/organism";
import { Button, InputOTP } from "@/components/elements";

export const VerifyEmail = ({
  handleSubmit,
  handleChange,
}: Props) => {

  const handleOTPChange = (otp: string) => {
    console.log("OTP:", otp);
  };
  const handleSendCode = () => {
    console.log("send code to email ::");
  };

  return (
    <LayoutAbstract
    title="yankee"
      subTitle="Verify Your Email"
      text="Check your email and enter the code!"
    >
      <InputOTP inputCount={6} handleOTPChange={handleOTPChange} />

      <S.Text>Code on the way to user@email.com</S.Text>

      <Button width="100%" onPress={handleSubmit} title={"Confirm"} />
      <S.Text>
        Didn’t you receive any code?
        <S.Text
          color={Colors.dark.bottomColor}
          onPress={handleSendCode}
        >
          {" "}
          Resend code
        </S.Text>
      </S.Text>
      <S.Text>
        Wanna try with your phone?
        <S.Text
          color={Colors.dark.bottomColor}
          onPress={() => handleChange('phone')}
        >
          {" "}
          Try with phone
        </S.Text>
      </S.Text>
    </LayoutAbstract>
  );
};
