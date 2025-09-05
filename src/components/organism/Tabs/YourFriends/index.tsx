import React from "react";
import { TouchableOpacity, View } from "react-native";

import * as S from "./styles";
import { IYourFriend } from "../@types";
import { formatNumber } from "@/utils/utils";
import { CardPost } from "@/components/organism";
import { Chat, Heart, Menu } from "@/assets/icons";
import { DynamicGrid } from "@/components/modules";
import Colors from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";

export const TabYourFriends = ({ posts, toggleLike }:IYourFriend) => {
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
                tabs
                color="#ffffff"
                style={{
                  fontSize: 8,
                  fontWeight: 500,
                  fontFamily: "Poppins-Medium",
                }}
              >
                Following
              </S.Text>
            </S.ButtonFollow>
          }
          avatar={item.user.avatar}
          userTag={item.user.userTag}
        >
          <S.Text color={"#FFFFFF"}>{item.description}</S.Text>
          <DynamicGrid items={item.image} />
          <S.FooterCardPost>
            <S.ContainerInteractions>
              <S.ContainerIcon onPress={() => toggleLike(item.id)}>
                <Heart
                  width={15}
                  height={13}
                  color={item.liked ? Colors.liked : theme === "dark" ? Colors.dark.iconHeart : Colors.light.iconHeart}
                />
                <S.Text color={"#FFFFFF"}>{formatNumber(item.likes)}</S.Text>
              </S.ContainerIcon>
              <S.ContainerIcon>
                <TouchableOpacity>
                  <Chat  color={
                  theme === "dark"
                    ? Colors.dark.icon
                    : Colors.light.icon
                  
              } />
                </TouchableOpacity>
                <S.Text color={"#FFFFFF"}>{formatNumber(item.comments.length)}</S.Text>
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
