import styled from "styled-components";
import { Text as TextReact } from "react-native";

export const Text = styled(TextReact)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }: any) => theme.colors.text};
  font-family: "Poppins-Regular";
`;
