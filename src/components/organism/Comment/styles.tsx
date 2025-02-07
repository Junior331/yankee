import styled from "styled-components";
import { Image, View } from "react-native";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";

export const Container = styled(View)`
  width: 100%;
  padding: 0 15px;
  min-height: 50px;
  overflow: hidden;
  flex-direction: row;
  border-radius: 23px;
  align-items: center;
  background-color: #dcdada;
  justify-content: space-between;
`;

export const ContainerUser = styled(View)`
  gap: 5px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBadge = styled(View)`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled(View)`
  left: -1px;
  width: 15px;
  height: 15px;
  bottom: -2px;
  position: absolute;
  border-radius: 15px;
  padding-bottom: 2px;
  align-items: center;
  justify-content: center;
  border: 1px solid #faf9f9;
  background-color: #1976d2;
`;

export const ContainerAvatar = styled(View)`
  width: 30px;
  height: 30px;
  border-radius: 60px;
  background-color: #c4c4c4;
`;

export const ContainerText = styled(View)`
  flex: 1;
`;

export const Avatar = styled(Image)`
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;

export const Text = styled(TextComponent)`
  flex-shrink: 1;
  font-size: 10px;
  color: #848383;
  line-height: 12px;
`;

export const Title = styled(TitleComponent)`
  color: #4d4c4c;
  font-size: 12px;
  font-weight: 500;
  font-family: "Poppins-Medium";
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-shrink: 1;
`;
