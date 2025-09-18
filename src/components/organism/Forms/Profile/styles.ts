import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements/Text";
import { Container, InputContent } from "@/components/elements/Input/styles";

export const MessageError = styled(TextComponent)`
  width: 100%;
  margin-left: 40px;
  text-align: start;
  color: ${Colors.dark.error};
`;

export const ContainerForm = styled(View)`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  align-items: flex-start;
`;
export const ContainerInput = styled(View)`
  gap: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInput = styled(Container)`
  width: 100%;
  height: auto;
  overflow: hidden;
  max-height: 150px;
  padding: 5px 15px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled(TextComponent)<StyledProps>`
  font-family: "Poppins-Medium";
  color: ${({ color }) => color || "#ffffff"};
  font-size: ${({ fontSize }) => fontSize || "13px"};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
`;

export const Input = styled(InputContent).attrs(({ theme }) => ({
  placeholderTextColor:
    theme === "dark" ? Colors.dark.placeholder : Colors.light.placeholder,
}))`
  padding: 0;
  height: auto;
  flex: 1 0 auto;
  font-size: 12px;
  max-height: 80%;
  color: ${({ theme }) =>
    theme === "dark" ? Colors.dark.text : Colors.light.text};
`;

export const Button = styled(TouchableOpacity)<StyledProps>`
  gap: 3px;
  width: 100%;
  height: 45px;
  margin: 0 auto;
  min-width: 100px;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || "#ffffff"};
`;

export const InputWrapper = styled(View)`
  width: 100%;
  height: auto;
  position: relative;
`;

export const CharacterCount = styled(TextComponent)<StyledProps>`
  right: 0;
  top: -15px;
  font-size: 10px;
  position: absolute;
  color: ${({ color }) => color || "#ffffff"};
`;

export const ValidationText = styled(TextComponent)<StyledProps>`
  width: 100%;
  opacity: 0.8;
  margin-top: 5px;
  font-size: 11px;
  margin-left: 5px;
  text-align: start;
  color: ${({ color }) => color || "#ffffff"};
`;

export const ErrorText = styled(TextComponent)`
  width: 100%;
  margin-left: 5px;
  margin-top: 5px;
  text-align: start;
  font-size: 11px;
  color: ${Colors.dark.error};
`;
