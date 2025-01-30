import { View } from "react-native";
import styled from "styled-components";
import Slider from "@react-native-community/slider";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";

export const Container = styled(View)`
  width: 100%;
  padding: 20px;
`;
export const SliderCustom = styled(Slider)`
  width: 100%;
`;

export const SliderContainer = styled(View)`
  width: 100%;
`;
export const ContainerOptions = styled(View)`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled(TextComponent)`
  color: #ffffff;
  font-size: 10px;
`;
export const Title = styled(TitleComponent)`
  color: #ffffff;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: "Poppins-Regular";
`;
