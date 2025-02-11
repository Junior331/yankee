import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";

export const Container = styled(View)`
  gap: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const IconContainer = styled(View)`
  width: auto;
  height: auto;
  min-width: 20px;
  min-height: 20px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(TouchableOpacity)`
  height: 20px;
`;
