import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import * as S from "./styles";
import Colors from "@/constants/Colors";
import { mocks } from "@/services/mocks";
import { LeftArrow } from "@/assets/icons";
import { Forms, TabBar } from "@/components/organism";
import { Edit, Location, Menu } from "@/assets/icons";
import { useNavigationHandler } from "@/hooks/navigation";

const { width } = Dimensions.get("window");

export const Profile = () => {
  const route = useRoute();
  const { goBack } = useNavigationHandler();
  const [tabActive, setTabActive] = useState("photos");
  const [isEdit, setIsEdit] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [bannerLoading, setBannerLoading] = useState(true);
  const [avatarLoading, setAvatarLoading] = useState(true);

  const renderGridItem = ({
    item,
  }: {
    item: { id: number; name: string; image: string };
  }) => (
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
      {imageLoading && (
        <S.LoadingContainer>
          <ActivityIndicator />
        </S.LoadingContainer>
      )}
      <Image
        resizeMode="cover"
        alt={`Image ${item.name}`}
        source={{ uri: item.image }}
        onLoadEnd={() => setImageLoading(false)}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.ContainerBanner>
            {bannerLoading && (
              <S.LoadingContainer>
                <ActivityIndicator />
              </S.LoadingContainer>
            )}
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
              onLoadEnd={() => setBannerLoading(false)}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/2f1a/78bf/bbd451a2ca31047c7259800a489ce608?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DjwSGe~k4IGi9K9OTFvJctkelwsNGq3IPhFa7~2HUvUkzIOCOMQd84cxYKZbDmamontf0QGkLxbJDqGYDWj~R1RUzH6YdC1Etd470Sj6vLq0AUdM71I2ihplQElNDbQu6SwsmLCmzIn6rwRXkIWzRcbkg6p42jS7MVccXEjGcRfDYk7vDbmWCj1glLXHMWbYgV-Ub~NYV36jTD2~JQi8t0XAzbGAhlN9EAXPQia3lEz6tKvLdszO-qaA8oSTWrnWHWIxvSeTjPKsLurr1TSvOZmfWrXY2sQvAq~vLbiEq-stlyrAUh~GBKhi1LIjTAQYp8qhR2r-rtB6BIfxBCtFig__",
              }}
            />
          </S.ContainerBanner>
          <S.ButtonIcon
            onPress={() => (isEdit ? setIsEdit((prev) => !prev) : goBack())}
          >
            <LeftArrow
              color={isEdit ? Colors.dark.text : Colors.dark.background}
            />
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
          {avatarLoading && (
            <S.LoadingContainer>
              <ActivityIndicator />
            </S.LoadingContainer>
          )}
          <Image
            resizeMode="cover"
            onLoadEnd={() => setAvatarLoading(false)}
            style={{ width: "100%", height: "100%" }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tv3TJ-o3R2dB8UDpP4NR9gFUS7Pp2BQHMPtJv4x6Z8jGTWBJbQSygPmT1lSUkQQUQ-cQsQbRNjCzJXOSSC6vn8tIxMDuuIWH1LONMZSy0NyP2~K13152zqvTXgrM3Tbxk2vDP~bmzSODJE3fQxGZfHXsrfDJlvdO0oeQDhI8U0CZ40c0quMXby-uMNuwZIHQrkQdSkSF48vYA8yE4opHTScAeWylDi9XpAIpk95GovDJ6ym1mC1wcLG3zBGDKzeGuNq5HZiC9FM1-1-vesDE-VYm6E~GdYsASX5C4PNMtWzlU2nM1u2gIZZn0eegZ64MU8VWkow4MXw8AG2KMo9-gw__",
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
                  <S.Title fontSize="11px" color="#171717">
                    Edit Profile
                  </S.Title>
                </S.Button>
                <S.Button>
                  <S.Title fontSize="11px" color="#171717" st>
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
                    <S.TitleTab
                      tabs
                      fontSize="12px"
                      fontWeight={tabActive === tab.value ? 600 : 300}
                    >
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
      <TabBar currentRoute={route.name} />
    </S.Container>
  );
};
