import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as S from "./styles";
import { Text, SafeScreen } from "@/components/elements";
import { Header } from "@/components/organism";
import { LayoutAbstractProps } from "./@types";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export const LayoutAbstract = ({
  text,
  title,
  children,
  subTitle,
  labelHeader,
  isSecondary,
  handleOnPressHeader,
}: LayoutAbstractProps) => {
  const { theme } = useTheme();
  
  return (
    <SafeScreen>
      <S.Container bg_color={Colors[theme].background}>
        <Header
          label={labelHeader}
          isSecondary={isSecondary}
          handleOnPress={handleOnPressHeader}
        />
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          extraScrollHeight={50}
          keyboardOpeningTime={250}
          enableAutomaticScroll={true}
          bounces={false}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <S.Content>
              {title && <S.Title fontSize="32px">{title}</S.Title>}
              <S.ContainerText>
                {subTitle && <S.Title fontSize="24px">{subTitle}</S.Title>}
                {text && <Text>{text}</Text>}
              </S.ContainerText>
              {children}
            </S.Content>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </S.Container>
    </SafeScreen>
  );
};
