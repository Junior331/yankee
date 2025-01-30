import styled from "styled-components";

import Colors from "@/constants/Colors";
import { StyledProps } from "@/utils/types";
import { Text as TextComponent } from "@/components/elements";

export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || Colors.dark.text};
`;
