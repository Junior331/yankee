import styled from "styled-components";
import { View, ScrollView, TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled(View)`
  flex: 1 0 auto;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Line = styled(View)`
  height: 5px;
  width: 100%;
  max-width: 80px;
  border-radius: 20px;
  margin: 5px auto 10px;
  background-color: #838485;
`;

export const Content = styled(ScrollView)`
  max-height: 85%;
`;
