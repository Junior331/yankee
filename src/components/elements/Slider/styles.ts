import { View, Text as ReactText } from "react-native";
import styled from "styled-components";
import Slider from "@react-native-community/slider";

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

export const Text = styled(ReactText)`
  color: #ffffff;
  font-size: 10px;
`;
export const Title = styled(ReactText)`
  color: #ffffff;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: "Poppins-Regular";
`;
