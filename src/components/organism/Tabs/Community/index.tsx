import React from "react";
import { TouchableOpacity, View } from "react-native";

import * as S from "./styles";
import { ICommunity } from "../@types";
import { formatNumber } from "@/utils/utils";
import { CardPost } from "@/components/organism";
import { Chat, Heart, Menu } from "@/assets/icons";
import { DynamicGrid } from "@/components/modules";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export const TabCommunity = ({ posts, toggleLike }: ICommunity) => {
  const { theme } = useTheme();

  return (
    <S.ContainerNotions>
      {posts.map((item) => (
        <CardPost
          key={item.id}
          name={item.user.name}
          style={{ marginBottom: 20, gap: 16 }}
          buttonHeader={
            <S.ButtonFollow>
              <S.Text
                style={{
                  fontSize: 8,
                  fontWeight: 500,
                  fontFamily: "Poppins-Medium",
                  color: "#121212",
                }}
              >
                Follow
              </S.Text>
              <S.IconAdd>
                <S.Text
                  tabs
                  style={{ fontSize: 8, marginTop: -1.4, color: "#121212" }}
                >
                  +
                </S.Text>
              </S.IconAdd>
            </S.ButtonFollow>
          }
          avatar={item.user.avatar}
          userTag={item.user.userTag}
        >
          <S.Text>{item.description}</S.Text>
          <DynamicGrid items={item.image} />
          <S.FooterCardPost>
            <S.ContainerInteractions>
              <S.ContainerIcon onPress={() => toggleLike(item.id)}>
                <Heart
                  width={15}
                  height={13}
                  color={
                    item.liked
                      ? Colors.liked
                      : theme === "dark"
                      ? Colors.dark.iconHeart
                      : Colors.light.iconHeart
                  }
                  fill={item.liked ? Colors.liked : ""}
                />
                <S.Text color={"#FFFFFF"}>{formatNumber(item.likes)}</S.Text>
              </S.ContainerIcon>
              <S.ContainerIcon>
                <TouchableOpacity>
                  <Chat
                    color={
                      theme === "dark" ? Colors.dark.icon : Colors.light.icon
                    }
                  />
                </TouchableOpacity>
                <S.Text color={"#FFFFFF"}>
                  {formatNumber(item.comments.length)}
                </S.Text>
              </S.ContainerIcon>
            </S.ContainerInteractions>
            <View style={{ transform: "rotate(90deg)" }}>
              <Menu width={12} height={12} color="#fff" />
            </View>
          </S.FooterCardPost>
        </CardPost>
      ))}
    </S.ContainerNotions>
  );
};
