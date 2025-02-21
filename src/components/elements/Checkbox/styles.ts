import styled from "styled-components";
import { View, TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  gap: 8px;
  margin-top: 16px;
  flex-direction: row;
  align-items: flex-start;
`;
export const Content = styled(View)`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  border: 2px solid #2196f3;
  background-color: transparent;
`;
