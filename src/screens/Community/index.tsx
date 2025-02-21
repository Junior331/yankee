import { useRouter } from "expo-router";
import React, { useState } from "react";
import MapView from "react-native-maps";
import * as ImagePicker from "expo-image-picker";
import { FlatList } from "react-native-gesture-handler";
import { Image, TouchableOpacity, View, Alert } from "react-native";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { filters, iconMapping } from "./utils";
import { LeftArrow, PhotoPlus } from "@/assets/icons";
import { Layout, ModalGeneric, Tabs } from "@/components/organism";
import { post, trend } from "@/components/organism/Tabs/@types";

export const Community = () => {
  const router = useRouter();
  const [tabActive, setTabActive] = useState("community");
  const [posts, setPosts] = useState(mocks.postsCommunity);
  const [isModalAddEvent, setModalAddEvent] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const toggleLike = (postId: number) => {
    console.log(postId);

    setPosts((prevPosts) => {
      if (tabActive === "community" || tabActive === "yourfriends") {
        return {
          ...prevPosts,
          [tabActive]: prevPosts[tabActive as keyof typeof prevPosts].map(
            (post: any) =>
              post.id === postId
                ? {
                    ...post,
                    likes: post.likes + (post.liked ? -1 : 1),
                    liked: !post.liked,
                  }
                : post
          ),
        };
      }

      return prevPosts;
    });
  };

  const renderTabContent = () => {
    switch (tabActive) {
      case "community":
        return (
          <Tabs.TabCommunity
            posts={posts.community as post[]}
            toggleLike={toggleLike}
          />
        );
      case "trending":
        return <Tabs.TabTrending trendings={posts.trending as trend[]} />;
      case "yourfriends":
        return (
          <Tabs.TabYourFriends
            posts={posts.yourfriends as post[]}
            toggleLike={toggleLike}
          />
        );
      default:
        return null;
    }
  };

  const handlePickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permissão Necessária",
        "É necessário permitir o acesso às fotos para selecionar uma imagem."
      );
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  return (
    <Layout titleHeader="yankee">
      <S.Container>
        <S.Content>
          <S.ListStorys>
            <FlatList
              horizontal
              data={mocks.storys}
              style={{ width: "100%" }}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => String(item.id)}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              renderItem={({ item }) => {
                if (item.id === "add_story") {
                  return (
                    <S.ContainerStory key={item.id}>
                      <S.AddStory>
                        <S.Text style={{ fontSize: 32 }}>+</S.Text>
                      </S.AddStory>
                      <S.Text>Add</S.Text>
                    </S.ContainerStory>
                  );
                }

                return (
                  <S.ContainerStory
                    onPress={() => router.push(`/(tabs)/stories?id=${item.id}`)}
                  >
                    <S.Story>
                      <Image
                        resizeMode="cover"
                        style={{ width: "100%", height: "100%" }}
                        source={{
                          uri: item.avatar,
                        }}
                      />
                    </S.Story>
                    <S.Text>{item.name}</S.Text>
                  </S.ContainerStory>
                );
              }}
            />
          </S.ListStorys>

          <S.ContainerMaps>
            <MapView
              style={{
                width: "100%",
                height: "100%",
              }}
            />

            <S.FilterContainer>
              {filters.map((item) => {
                const IconComponent =
                  iconMapping[item as keyof typeof iconMapping];

                return (
                  <S.FilterItem
                    activeOpacity={0.7}
                    style={{
                      boxShadow: "0px 2px 4px 0px rgba(35, 171, 255, 0.4)",
                    }}
                  >
                    <S.FilterText>{item}</S.FilterText>
                    <IconComponent />
                  </S.FilterItem>
                );
              })}
            </S.FilterContainer>

            <S.Addevent
              activeOpacity={0.5}
              onPress={() => setModalAddEvent(true)}
            >
              <S.Text fontWeight={700} fontSize="15px">
                +
              </S.Text>
            </S.Addevent>
          </S.ContainerMaps>

          <S.ContainerTabs>
            <S.Tabs>
              {mocks.tabs.community.map((tab) => (
                <S.Tab key={tab.id} onPress={() => setTabActive(tab.value)}>
                  <S.Text
                    tabs
                    color={tabActive === tab.value ? "#fff" : "#4d4c4c"}
                  >
                    {tab.label}
                  </S.Text>
                </S.Tab>
              ))}
            </S.Tabs>
          </S.ContainerTabs>

          {renderTabContent()}
        </S.Content>

        <ModalGeneric
          modalVisible={isModalAddEvent}
          setModalVisible={setModalAddEvent}
          style={{ backgroundColor: "transparent" }}
        >
          <S.CardAddEvent>
            <S.Header>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setModalAddEvent(false)}
              >
                <LeftArrow />
              </TouchableOpacity>
              <S.Title>Add Event</S.Title>
            </S.Header>
            <TouchableOpacity onPress={handlePickImage}>
              <S.CardUploadImage>
                {profileImage ? (
                  <Image
                    source={{ uri: profileImage }}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : (
                  <View style={{ width: "100%", alignItems: "center" }}>
                    <PhotoPlus />
                  </View>
                )}
              </S.CardUploadImage>
            </TouchableOpacity>

            <S.ContainerInput>
              <S.Text color="#fff" fontSize="14px">
                Event name
              </S.Text>
              <S.Input placeholder="Event Name" />
            </S.ContainerInput>

            <S.ContainerInput>
              <S.Text color="#fff" fontSize="14px">
                Description
              </S.Text>
              <S.Input
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                placeholder="Description"
                style={{
                  minHeight: 95,
                }}
              />
            </S.ContainerInput>

            <S.DatePickerContainer>
              <S.DatePicker>
                <S.Text fontSize="14px" color="#171717">
                  Start
                </S.Text>
              </S.DatePicker>
              <S.DatePicker>
                <S.Text fontSize="14px" color="#171717">
                  End (Optional)
                </S.Text>
              </S.DatePicker>
            </S.DatePickerContainer>

            <S.ContainerInput>
              <S.Text color="#fff" fontSize="14px">
                Location
              </S.Text>
              <S.Input placeholder="Location" />
            </S.ContainerInput>

            <S.PostButton>
              <S.PostButtonText>Post</S.PostButtonText>
            </S.PostButton>
          </S.CardAddEvent>
        </ModalGeneric>
      </S.Container>
    </Layout>
  );
};
