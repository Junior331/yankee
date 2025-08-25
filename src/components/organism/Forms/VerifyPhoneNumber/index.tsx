import React from "react";

import * as S from "./styles";
import { Props } from "./@types";
import Colors from "@/constants/Colors";
import { LayoutAbstract } from "@/components/organism/LayoutAbstract";
import { Button, InputOTP } from "@/components/elements";

export const VerifyPhoneNumber = ({ handleSubmit, handleChange }: Props) => {

  const handleOTPChange = (otp: string) => {
    console.log("OTP:", otp);
  };

  const handleSendCode = () => {
    console.log("send code sms ::");
  };

  return (
    <LayoutAbstract
      title="yankee"
      subTitle="Verify Your SMS"
      text="Check your SMS and enter the code!"
    >
      <InputOTP inputCount={6} handleOTPChange={handleOTPChange} />

      <S.Text>Code on the way to +1 (857) XXX-XX78</S.Text>

      <Button width="100%" onPress={handleSubmit} title={"Submit"} />
      <S.Text>
        Didn’t you receive any code?
        <S.Text onPress={handleSendCode} color={Colors.dark.bottomColor}>
          {" "}
          Resend code
        </S.Text>
      </S.Text>
      <S.Text>
        Wanna try with your email?
        <S.Text
          color={Colors.dark.bottomColor}
          onPress={() => handleChange("email")}
        >
          {" "}
          Try with email
        </S.Text>
      </S.Text>
    </LayoutAbstract>
  );
};
