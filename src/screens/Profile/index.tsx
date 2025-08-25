import React, { useState } from "react";
import { View, Image, FlatList, Dimensions, TouchableOpacity } from "react-native";

import * as S from "./styles";
import Colors from "@/constants/Colors";
import { mocks } from "@/services/mocks";
import { LeftArrow } from "@/assets/icons";
import { Forms } from "@/components/organism";
import { Loading } from "@/components/elements";
import { Edit, Location, Menu } from "@/assets/icons";
import { useNavigationHandler } from "@/hooks/navigation";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export const Profile = () => {
  const router = useRouter();
  const { goBack } = useNavigationHandler();
  const [isEdit, setIsEdit] = useState(false);
  const [tabActive, setTabActive] = useState("photos");
  const [imageLoading, setImageLoading] = useState(true);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [avatarLoading, setAvatarLoading] = useState(true);

  const renderGridItem = ({ item }: { item: { id: number; name: string; image: string } }) => (
    <View
      style={{
        margin: 2,
        borderRadius: 10,
        overflow: "hidden",
        width: width / 3 - 10,
        height: width / 3 - 3,
        backgroundColor: "#ccc",
      }}
    >
      {imageLoading && <Loading />}
      <TouchableOpacity>
        <Image
          resizeMode="cover"
          alt={`Image ${item.name}`}
          source={{ uri: item.image }}
          onLoadEnd={() => setImageLoading(false)}
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.ContainerBanner>
            {bannerLoading && <Loading />}
            <Image
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
              }}
              onLoadEnd={() => setBannerLoading(false)}
              source={{
                uri: "https://picsum.photos/seed/109/200/300",
              }}
            />
          </S.ContainerBanner>
          <S.ButtonIcon onPress={() => (isEdit ? setIsEdit((prev) => !prev) : goBack())}>
            <LeftArrow color={isEdit ? Colors.dark.text : Colors.dark.background} />
          </S.ButtonIcon>
          <S.ButtonIcon onPress={goBack}>
            {isEdit ? (
              <S.ButtonEdit>
                <Edit />
              </S.ButtonEdit>
            ) : (
              <Menu color={Colors.dark.background} />
            )}
          </S.ButtonIcon>
        </S.Header>

        <S.ContainerAvatar>
          {avatarLoading && <Loading />}
          <Image
            resizeMode="cover"
            onLoadEnd={() => setAvatarLoading(false)}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 99999,
            }}
            source={{
              uri: "https://picsum.photos/seed/108/200/300",
            }}
          />
        </S.ContainerAvatar>

        {isEdit ? (
          <Forms.Profile />
        ) : (
          <>
            <S.ContainerInfo>
              <View>
                <S.Title>Sophia Carter</S.Title>
                <S.Text>@SophiaKindVibes</S.Text>
              </View>
              <View>
                <S.Text fontSize="12px">Welcome to my world!</S.Text>
                <S.Text color="#39A3FA" fontSize="12px">
                  www.sophiaworld.com
                </S.Text>
              </View>
              <S.ContainerLocation>
                <Location width={22} height={22} />
                <S.Text fontSize="11px">Boston, USA</S.Text>
              </S.ContainerLocation>

              <S.ContainerBigNumbers>
                <S.BigNumber>
                  <S.Title fontSize="15px">200</S.Title>
                  <S.Text fontSize="12px">Connections</S.Text>
                </S.BigNumber>
                <S.BigNumber>
                  <S.Title fontSize="15px">256k</S.Title>
                  <S.Text fontSize="12px">Admirers</S.Text>
                </S.BigNumber>
                <S.BigNumber>
                  <S.Title fontSize="15px">300k</S.Title>
                  <S.Text fontSize="12px">Hearts</S.Text>
                </S.BigNumber>
              </S.ContainerBigNumbers>
              <S.ContainerButton>
                <S.Button onPress={() => setIsEdit((prev) => !prev)}>
                  <S.Title fontSize="11px" color={Colors.dark.background}>
                    Edit Profile
                  </S.Title>
                </S.Button>
                <S.Button onPress={() => router.push("/(tabs)/messages")}>
                  <S.Title fontSize="11px" color={Colors.dark.background}>
                    Chat
                  </S.Title>
                </S.Button>
              </S.ContainerButton>
            </S.ContainerInfo>

            <S.ContainerTabs>
              <S.Tabs>
                {mocks.tabs.profile.map((tab) => (
                  <S.Tab
                    key={tab.id}
                    onPress={() => setTabActive(tab.value)}
                    fontWeight={tabActive === tab.value ? 600 : 300}
                  >
                    <S.TitleTab tabs fontSize="12px" fontWeight={tabActive === tab.value ? 600 : 300}>
                      {tab.label}
                    </S.TitleTab>
                    <S.Line isActive={tabActive === tab.value} />
                  </S.Tab>
                ))}
              </S.Tabs>
            </S.ContainerTabs>

            <FlatList
              numColumns={3}
              renderItem={renderGridItem}
              keyExtractor={(item) => String(item.id)}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              data={mocks.gallery[tabActive as keyof typeof mocks.gallery]}
            />
          </>
        )}
      </S.Content>
    </S.Container>
  );
};
