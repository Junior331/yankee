import React from "react";

import * as S from "./styles";
import { Props } from "../@types";
import { Arrow } from "@/assets/icons";
import { Button, Input } from "@/components/elements";
import { LayoutAbstract } from "@/components/organism/LayoutAbstract";

export const PhoneNumber = ({
  values,
  errors,
  touched,
  handleSubmit,
  handleChange,
}: Props) => {

  return (
    <LayoutAbstract
    title="yankee"
      subTitle="Enter you phone number"
      text="Add your number for extra security!"
    >
      <S.ContainerInput>
        <Input
          textContentType="telephoneNumber"
          icon={
            <S.CountryCode>
              <S.CountryCodeText>
                +1 <Arrow />
              </S.CountryCodeText>
            </S.CountryCode>
          }
          nativeID="telephoneNumber"
          value={values.phoneNumber}
          placeholder={"Phone Number"}
          onChangeText={handleChange("phoneNumber")}
        />

        {touched.phoneNumber && errors.phoneNumber && (
          <S.MessageError>{errors.phoneNumber}</S.MessageError>
        )}
      </S.ContainerInput>
      <Button width="100%" onPress={handleSubmit} title={"Submit"} />
    </LayoutAbstract>
  );
};
