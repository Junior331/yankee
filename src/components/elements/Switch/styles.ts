import styled from "styled-components";
import { TouchableOpacity, Text as ReactText } from "react-native";

export const Container = styled(TouchableOpacity) `
  gap: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Text = styled(ReactText)`
  flex: 1 0 200px;
  font-size: 12px;
  font-weight: 300;
  color: #ffffff;
`;
