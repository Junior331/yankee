import { View } from "react-native";
import styled from "styled-components";

import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.dark.background};
`;

export const Content = styled(ViewGeneric)`
  flex: 1;
  position: relative;
  flex-direction: column;
  padding: 35px 15px 30px;
  justify-content: flex-start;
`;
