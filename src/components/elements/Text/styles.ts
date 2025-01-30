import styled from "styled-components";
import { Text as TextReact } from "react-native";

import Colors from "@/constants/Colors";

export const Text = styled(TextReact)`
  font-size: 14px;
  font-weight: 400;
  color: ${Colors.dark.text};
  font-family: "Poppins-Regular";
`;
