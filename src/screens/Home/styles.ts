import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground as ImageBackgroundReact,
} from "react-native";

import {
  Text as TextComponent,
  Title as TitleComponent,
} from "@/components/elements";
import { StyledProps } from "@/utils/types";

export const ViewGeneric = styled(View)`
  display: flex;
  align-items: start;
  flex-direction: row;
  justify-content: start;
`;

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  align-items: start;
  justify-content: start;
`;

export const Content = styled(ViewGeneric)`
  width: 100%;
  flex: 1 0 auto;
  overflow: hidden;
  position: relative;
`;

export const Header = styled(ViewGeneric)`
  gap: 10px;
  height: auto;
  align-items: center;
`;

export const ImageBackground = styled(ImageBackgroundReact)`
  width: 100%;
  height: auto;
  overflow: hidden;
  min-height: 534px;
  position: relative;
  border-radius: 24px;
  background-color: #c4c4c4;
`;

export const GradientOverlay = styled(LinearGradient)`
  bottom: 0;
  width: 100%;
  height: 40%;
  position: absolute;
`;

export const ContentCard = styled(ViewGeneric)`
  width: 100%;
  height: auto;
  padding: 20px;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const Icon = styled(View)`
  width: 18px;
  height: 18px;
  overflow: hidden;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  background-color: #1976d2;
`;

export const Text = styled(TextComponent)<StyledProps>`
  color: ${({ color }) => color || "#FAF9F9"};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
`;

export const Title = styled(TitleComponent)<StyledProps>`
  font-size: 12px;
  font-weight: 500;
  word-break: break-word;
  font-family: "Poppins-Medium";
  color: ${({ color }) => color || "#4d4c4c"};
`;

export const ContainerInfo = styled(ViewGeneric)`
  gap: 20px;
  width: 100%;
  height: auto;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ContainerComments = styled(ViewGeneric)`
  width: 100%;
  height: 50px;
  padding: 0 15px;
  flex-direction: row;
  border-radius: 23px;
  align-items: center;
  background-color: #dcdada;
  justify-content: space-between;
`;

export const ContainerChips = styled(ViewGeneric)`
  width: 25px;
  height: auto;
  padding: 10px 0;
  border-radius: 16px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #dcdada;
  background-color: #2d2d2dcc;

  .likesCount {
    color: #a5a4a4;
    margin-top: 5px;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const AvatarChips = styled(ViewGeneric)`
  position: relative;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled(Image)`
  width: 25px;
  height: 25px;
  border-radius: 20px;
`;

export const ListComments = styled(ViewGeneric)`
  overflow-y: auto;
  align-items: center;
  flex-direction: column;
`;

export const Line = styled(View)`
  height: 1px;
  width: 100%;
  background-color: #dadada;
`;

export const ContainerFilter = styled(ViewGeneric)<StyledProps>`
  top: 60px;
  left: 25px;
  overflow: hidden;
  position: absolute;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #171717;
  transition: width 3s ease;
  border: 1px solid #dcdada;
  width: ${({ width }) => width || "110px"};
  height: ${({ height }) => height || "auto"};
`;
export const OptionFilter = styled(TouchableOpacity)`
  gap: 20px;
  width: 100%;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;
