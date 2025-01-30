import styled from "styled-components";
import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import Colors from "@/constants/Colors";
import { removeScrollUi } from "@/utils/utils";
import { View, ScrollView, TouchableOpacity, TextInput } from "react-native";

export const Container = styled(View)`
  width: 100%;
  padding: 20px;
`;

export const Content = styled(View)`
  gap: 15px;
  margin-top: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled(TitleComponent)`
  color: #ffffff;
  font-size: 10px;
  font-weight: 400;
  margin-bottom: 5px;
  font-family: "Poppins-Regular";
`;
export const ContainerInput = styled(View)`
  width: 100%;
  margin-top: 5px;
  padding: 6px 10px;
  flex-direction: row;
  align-items: center;
  align-self: stretch;
  border-radius: 24px;
  border: 1px solid #fff;
  justify-content: space-between;
`;
export const Input = styled(TextInput).attrs(() => ({
  placeholderTextColor: "#DCDADA",
}))`
  height: 100%;
  max-width: 90%;
  flex: 1 0 auto;
  padding: 0 5px;
  color: ${Colors.dark.text};
`;
export const ListCity = styled(ScrollView).attrs(removeScrollUi)`
  width: 100%;
  overflow: hidden;
  max-height: 250px;
`;

export const OptionCity = styled(TouchableOpacity)`
  width: 100%;
  margin: 5px 0;
  padding: 6px 10px;
  border-radius: 24px;
  align-items: center;
  border: 1px solid #fff;
  justify-content: flex-start;
`;

export const Text = styled(TextComponent)`
  width: 100%;
  color: #ffffff;
  font-size: 10px;
`;
