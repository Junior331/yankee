import { View } from "react-native";
import styled from "styled-components";


export const LoadingContainer = styled(View)`
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
`;