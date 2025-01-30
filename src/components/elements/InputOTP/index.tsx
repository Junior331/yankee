import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import OTPTextInput from "react-native-otp-textinput";

import { IInputOTP } from "./@types";

export const InputOTP = ({ handleOTPChange, inputCount }: IInputOTP) => {
  const otpInputRef = useRef<OTPTextInput>(null);

  return (
    <OTPTextInput
      ref={otpInputRef}
      tintColor="#fff"
      offTintColor="#fff"
      inputCount={inputCount}
      textInputStyle={styles.input}
      handleTextChange={handleOTPChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 50,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 8,
    color: "#ffffff",
    textAlign: "center",
    borderBottomWidth: 1,
  },
});
