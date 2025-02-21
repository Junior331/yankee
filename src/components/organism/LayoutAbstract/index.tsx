import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import * as S from "./styles";
import { Text } from "@/components/elements";
import { Header } from "@/components/organism";
import { dismissKeyboard } from "@/utils/utils";
import { LayoutAbstractProps } from "./@types";

export const LayoutAbstract = ({
  text,
  title,
  children,
  subTitle,
  labelHeader,
  isSecondary,
  handleOnPressHeader,
}: LayoutAbstractProps) => {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <S.Container>
        <Header
          label={labelHeader}
          isSecondary={isSecondary}
          handleOnPress={handleOnPressHeader}
        />
        <S.ContainerScrollView>
          <S.Content>
            {title && <S.Title fontSize="32px">{title}</S.Title>}
            <S.ContainerText>
              {subTitle && <S.Title fontSize="24px">{subTitle}</S.Title>}
              {text && <Text>{text}</Text>}
            </S.ContainerText>
            {children}
          </S.Content>
        </S.ContainerScrollView>
      </S.Container>
    </TouchableWithoutFeedback>
  );
};
