import styled from "styled-components";
import { StyledProps } from "@/utils/types";
import { View, TouchableOpacity } from "react-native";

export const Container = styled(View)<{ $Visible?: boolean }>`
  left: 5%;
  right: 5%;
  z-index: 2;
  width: 90%;
  bottom: 30px;
  height: 50px;
  margin: 0 auto;
  padding: 0 10px;
  position: absolute;
  flex-direction: row;
  border-radius: 23px;
  align-items: center;
  background-color: #121212;
  justify-content: space-between;
  display: ${({$Visible}) => $Visible ? "flex" : "none"};
`;

export const ContainerIcon = styled(TouchableOpacity)<StyledProps>`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg_color }) => bg_color || "transparent"};
`;
