import styled from "styled-components";
import { Text as ReactText } from "react-native";

export const Title = styled(ReactText)`
  font-size: 20px;
  font-weight: 700;
  font-family: "Poppins-Bold";
  color: ${({ theme }: any) => theme.colors.text};
`;
