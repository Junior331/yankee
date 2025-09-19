import React, { useState } from "react";
import {
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { LeftArrow } from "@/assets/icons";
import { Forms, MediaViewer, Layout } from "@/components/organism";
import { Loading } from "@/components/elements";
import { Edit, Location, Menu } from "@/assets/icons";
import { useNavigationHandler } from "@/hooks/navigation";
import { useRouter } from "expo-router";
import { useTheme } from "@/contexts/ThemeContext";
import Colors from "@/constants/Colors";

const { width } = Dimensions.get("window");

export const Profile = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const { goBack } = useNavigationHandler();
  const [isEdit, setIsEdit] = useState(false);
  const [tabActive, setTabActive] = useState("photos");
  const [bannerLoading, setBannerLoading] = useState(true);
  const [avatarLoading, setAvatarLoading] = useState(true);
  const [mediaViewerVisible, setMediaViewerVisible] = useState(false);
  const [selectedMediaItem, setSelectedMediaItem] = useState<any>(null);
  const [loadingImages, setLoadingImages] = useState<{
    [key: number]: boolean;
  }>({});

  const handleMediaPress = (item: any) => {
    console.log('handleMediaPress called with item:', item);
    console.log('Current tabActive:', tabActive);

    const mediaItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      video: item.video,
      type: (tabActive === "videos" ? "video" : "image") as "image" | "video",
    };

    console.log('Created mediaItem:', mediaItem);
    // setSelectedMediaItem(mediaItem);
    // setMediaViewerVisible(true);
  };

  const handleCloseMediaViewer = () => {
    setMediaViewerVisible(false);
    setSelectedMediaItem(null);
  };

  const renderHeaderComponent = () => (
    <>
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
        <S.ButtonIcon
          onPress={() => (isEdit ? setIsEdit((prev) => !prev) : goBack())}
        >
          <LeftArrow
            color={
              isEdit ? "#FFFFFF" : theme === "dark" ? "#000000" : "#ffffff"
            }
          />
        </S.ButtonIcon>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <S.ButtonIcon onPress={goBack}>
            {isEdit ? (
              <S.ButtonEdit>
                <Edit />
              </S.ButtonEdit>
            ) : (
              <Menu color={theme === "dark" ? "#000000" : "#ffffff"} />
            )}
          </S.ButtonIcon>
        </View>
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
              <S.Title color={Colors[theme].text}>Sophia Carter</S.Title>
              <S.Text color={Colors[theme].text}>@SophiaKindVibes</S.Text>
            </View>
            <View>
              <S.Text fontSize="12px" color={Colors[theme].text}>
                Welcome to my world!
              </S.Text>
              <S.Text color="#39A3FA" fontSize="12px">
                www.sophiaworld.com
              </S.Text>
            </View>
            <S.ContainerLocation>
              <Location width={22} height={22} color={Colors[theme].text} />
              <S.Text fontSize="11px" color={Colors[theme].text}>
                Boston, USA
              </S.Text>
            </S.ContainerLocation>

            <S.ContainerBigNumbers>
              <S.BigNumber>
                <S.Title fontSize="15px" color={Colors[theme].text}>
                  200
                </S.Title>
                <S.Text fontSize="12px" color={Colors[theme].subtext}>
                  Connections
                </S.Text>
              </S.BigNumber>
              <S.BigNumber>
                <S.Title fontSize="15px" color={Colors[theme].text}>
                  256k
                </S.Title>
                <S.Text fontSize="12px" color={Colors[theme].subtext}>
                  Admirers
                </S.Text>
              </S.BigNumber>
              <S.BigNumber>
                <S.Title fontSize="15px" color={Colors[theme].text}>
                  300k
                </S.Title>
                <S.Text fontSize="12px" color={Colors[theme].subtext}>
                  Hearts
                </S.Text>
              </S.BigNumber>
            </S.ContainerBigNumbers>
            <S.ContainerButton>
              <S.Button
                onPress={() => setIsEdit((prev) => !prev)}
                color={Colors[theme].text}
              >
                <S.Title fontSize="11px" color={Colors[theme].background}>
                  Edit Profile
                </S.Title>
              </S.Button>
              <S.Button
                onPress={() => router.push("/(tabs)/messages")}
                color={Colors[theme].text}
              >
                <S.Title fontSize="11px" color={Colors[theme].background}>
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
                    color={Colors[theme].text}
                  >
                    {tab.label}
                  </S.TitleTab>
                  <S.Line
                    isActive={tabActive === tab.value}
                    color={Colors[theme].text}
                  />
                </S.Tab>
              ))}
            </S.Tabs>
          </S.ContainerTabs>
        </>
      )}
    </>
  );

  const renderGridItem = ({
    item,
  }: {
    item: { id: number; name: string; image: string; video?: string };
  }) => (
    <View
      style={{
        margin: 1,
        borderRadius: 10,
        overflow: "hidden",
        width: width / 3 - 2,
        height: width / 3 - 2,
        backgroundColor: "#ccc",
      }}
    >
      {loadingImages[item.id] !== false && <Loading />}
      <TouchableOpacity onPress={() => handleMediaPress(item)}>
        <Image
          resizeMode="cover"
          alt={`Image ${item.name}`}
          source={{ uri: item.image }}
          onLoadStart={() =>
            setLoadingImages((prev) => ({ ...prev, [item.id]: true }))
          }
          onLoadEnd={() =>
            setLoadingImages((prev) => ({ ...prev, [item.id]: false }))
          }
          style={{ width: "100%", height: "100%" }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
      <Layout titleHeader="yankee" padding="5px 0px 30px" paddingHeader="0px 10px 0">
        <S.Container>
          <S.Content>
            {isEdit ? (
              <>{renderHeaderComponent()}</>
            ) : (
              <FlatList
                numColumns={3}
                renderItem={renderGridItem}
                keyExtractor={(item) => String(item.id)}
                ListHeaderComponent={renderHeaderComponent}
                contentContainerStyle={{ paddingHorizontal: 0 }}
                data={mocks.gallery[tabActive as keyof typeof mocks.gallery]}
              />
            )}
          </S.Content>
        </S.Container>

        <MediaViewer
          visible={mediaViewerVisible}
          mediaItem={selectedMediaItem}
          onClose={handleCloseMediaViewer}
        />
      </Layout>
  );
};
