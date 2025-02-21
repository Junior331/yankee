import React from "react";
import * as S from "./styles";
import { Menu } from "@/assets/icons";
import { ITrending } from "../@types";
import { TouchableOpacity } from "react-native";
import { formatNumber } from "@/utils/utils";

export const TabTrending = ({ trendings }: ITrending) => {
  return (
    <S.ContainerNotions>
      {trendings.map((trend) => (
        <S.Card key={trend.id}>
          <S.ContainerText>
            <S.Title>{trend.title}</S.Title>
            <S.Text>{formatNumber(trend.posts)} posts</S.Text>
          </S.ContainerText>

          <TouchableOpacity style={{ padding: 8 }}>
            <Menu />
          </TouchableOpacity>
        </S.Card>
      ))}
    </S.ContainerNotions>
  );
};
