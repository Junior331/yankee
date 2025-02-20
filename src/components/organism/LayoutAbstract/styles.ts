import styled from "styled-components";
import { View, SafeAreaView, ScrollView } from "react-native";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Title as TitleComponent } from "@/components/elements";
import { removeScrollUi } from "@/utils/utils";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  background-color: ${Colors.dark.background};
`;

export const ContainerScrollView = styled(ScrollView).attrs(removeScrollUi)`
  flex: 1;
  flex-grow: 1;
`;

export const Content = styled(ViewGeneric)`
  gap: 16px;
  flex-grow: 1;
  min-height: 100%;
  align-items: center;
  padding: 5px 24px 32px;
  flex-direction: column;
  justify-content: center;
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
