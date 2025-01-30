import styled from "styled-components";
import { View, SafeAreaView } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Title as TitleComponent } from "@/components/elements";

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
  gap: 16px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 32px 24px;
  flex-direction: column;
`;

export const ContainerText = styled(ViewGeneric)`
  gap: 5px;
  flex-direction: column;
`;

export const Title = styled(TitleComponent)<StyledProps>`
  width: 100%;
  text-align: center;
  font-size: ${({ fontSize }) => fontSize};
`;
