import styled from "styled-components";
import { TouchableOpacity } from "react-native";

import { Text as TextComponent } from "@/components/elements";

export const Container = styled(TouchableOpacity) `
  gap: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Text = styled(TextComponent)`
  flex: 1 0 200px;
  font-size: 12px;
  font-weight: 300;
  word-break: break-word;
`;
