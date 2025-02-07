import { View } from "react-native";
import styled from "styled-components";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";

export const Container = styled(View)`
  width: 100%;
  height: auto;
  padding: 15px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLike = styled(View)`
  gap: 5px;
  width: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerUser = styled(View)`
  gap: 15px;
  flex: 1 0 auto;
  align-items: start;
  flex-direction: row;
  justify-content: center;
`;

export const ContainerAvatar = styled(View)`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 60px;
  background-color: #c4c4c4;
`;

export const ContainerText = styled(View)`
  width: auto;
  max-width: 80%;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const Text = styled(TextComponent)`
  font-size: 10px;
  color: #FFFFFF;
`;

export const Title = styled(TitleComponent)`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 5px;
  font-family: "Poppins-Medium";
`;
