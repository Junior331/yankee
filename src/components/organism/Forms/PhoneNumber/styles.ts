import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text } from "@/components/elements";

export const CountryCode = styled(TouchableOpacity)`
  padding: 6px 12px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: #007aff;
`;

export const CountryCodeText = styled(Text)`
  gap: 4px;
  display: flex;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInput = styled(View)`
  gap: 4px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageError = styled(Text)<StyledProps>`
  width: 100%;
  text-align: start;
  color: ${Colors.dark.error};
`;
