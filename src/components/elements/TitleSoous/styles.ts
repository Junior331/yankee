import { Text } from "react-native";
import styled from "styled-components";

import { SoousProps } from "./@types";

export const Soous = styled(Text)<SoousProps>`
  font-weight: bold;
  text-align: center;
  flex-direction: row;
  font-family: "Poppins-Bold";
  font-size: ${({ fontSize }) => fontSize}px;
`;
