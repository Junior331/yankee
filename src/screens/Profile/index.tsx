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
                uri: "https://s3-alpha-sig.figma.com/img/2f1a/78bf/bbd451a2ca31047c7259800a489ce608?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A62EMOQLYqFLTq~OWWQk74k54NQ3FEq4Hsn7r-kMHzaIbFJlP-EspBvTvvJbR3ZdRNtncLLoZ8lufqffC03rgbdOJJyE1X7F~qSHOx1jMOR8GaNwOeCHlNzqy9EPT4PuC6vf-Digxn~lyz-vPqMA~yOQlL0Ub~zwPvsfCavo0jsDBvtkvi~LsfosI9YqlL~dPnpSb6Al4Z0uwINar4pz-Cob80Vn8lFXXoYJnOKzHVSt1MXjGYqJbRBEtJiokBznXVrZ68KY4WSXMVwd1MUkUgeFy6KNbJ~ImHDvJiYF7zlMrZQyjgaggbAy05X-XeWh3UizFWLLrkbkk7Qb-TO3Kg__",
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
              uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bgEV7gxiUUIr1gxjDqcMcgQdsEpmEkZYfoij8dJOFaTABECzytvUN6NCjOPozBU86gwQPKx7u2vVBo0Gcj5BuoYJAXdlDp1Q4TI0SiqcnqnPerzoFq-dFtlzUkaN-onqrluYuVerhedYGrX2uLYtF-690IZu4ejexMUpLgQBycycAgRJ2nbd0M4YlUK0nceqid~jAmCjFt1lCgWyfyVjuyOIkzJLn4OfSd4g7UhRE8vRq7Cf5znUoF-pSDhd7CqyDe8J0TLf6H2RW6unrtLYFGCq0MKguSiawXN8dCQlrggIiFdJJctP~49F9oBuiZC1Zb49yJsFHBPMIqQC6tixkw__",
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
