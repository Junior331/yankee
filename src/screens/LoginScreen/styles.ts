import styled from "styled-components";
import { View, Text as TextReact } from "react-native";

import Colors from "@/constants/Colors";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.dark.background};
`;

export const Title = styled(TextReact)`
  color: ${Colors.dark.text};
  font-family: "Poppins-Regular";
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
`;
export const Subtitle = styled(TextReact)`
  color: ${Colors.dark.text};
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;
export const Divider = styled(View)`
  height: 1px;
  width: 50px;
  background-color: ${Colors.dark.text};
  margin: 60px 0px;
`;
