import styled from "styled-components";
import { Text as TextReact } from "react-native";
import { StyledProps } from "@/utils/types";

export const Text = styled(TextReact)<StyledProps>`
  font-size: 14px;
  font-weight: 400;
  color: ${({ color }) => color};
  font-family: "Poppins-Regular";
`;
