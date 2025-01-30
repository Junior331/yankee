import { SafeAreaView, View } from "react-native";
import styled from "styled-components";

import Colors from "@/constants/Colors";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.dark.background};
`;

export const Content = styled(ViewGeneric)`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  padding: 35px 15px 30px;
  justify-content: flex-start;
`;
