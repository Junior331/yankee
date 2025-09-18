import { StyledProps } from "@/utils/types";
import { View } from "react-native";
import styled from "styled-components";

export const ViewGeneric = styled(View)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: any) => theme.colors.background};
`;

export const Content = styled(ViewGeneric)<StyledProps>`
  flex: 1;
  width: 100%;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  padding: ${({ padding }) => padding || '5px 10px 30px' };
`;
