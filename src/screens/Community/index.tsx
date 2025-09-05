import { useRouter } from "expo-router";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FlatList } from "react-native-gesture-handler";
import { View, Image, Alert, Platform, ActionSheetIOS, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { filters, iconMapping } from "./utils";
import { Loading } from "@/components/elements";
import { Filter, LeftArrow, LibraryPhoto, PhotoPlus, Chillin, AID, Events, SOS, Moment, MapPin } from "@/assets/icons";
import { post, trend } from "@/components/organism/Tabs/@types";
import { Layout, ModalGeneric, Tabs } from "@/components/organism";

export const Community = () => {
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(true);
  const [tabActive, setTabActive] = useState("community");
  const [posts, setPosts] = useState(mocks.postsCommunity);
  const [isModalAddEvent, setModalAddEvent] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Mock data para marcadores do mapa
  const mapMarkers = [
    {
      id: 1,
      coordinate: { latitude: 42.3601, longitude: -71.0589 }, // Boston Center
      title: "Weekend Party",
      type: "events",
      count: 23,
      avatar: "https://picsum.photos/seed/user1/200/300",
    },
    {
      id: 2,
      coordinate: { latitude: 42.3485, longitude: -71.0694 }, // Cambridge
      title: "Emergency Help",
      type: "sos",
      count: 2,
      avatar: "https://picsum.photos/seed/user2/200/300",
    },
    {
      id: 3,
      coordinate: { latitude: 42.3736, longitude: -71.0420 }, // North End
      title: "Food Share",
      type: "aid",
      count: 10,
      avatar: "https://picsum.photos/seed/user3/200/300",
    },
    {
      id: 4,
      coordinate: { latitude: 42.3467, longitude: -71.0972 }, // Allston
      title: "Coffee Hangout",
      type: "chillin",
      count: 8,
      avatar: "https://picsum.photos/seed/user4/200/300",
    },
    {
      id: 5,
      coordinate: { latitude: 42.3320, longitude: -71.0202 }, // South Boston
      title: "Beach Moment",
      type: "moment",
      count: 15,
      avatar: "https://picsum.photos/seed/user5/200/300",
    },
    {
      id: 6,
      coordinate: { latitude: 42.3875, longitude: -71.0995 }, // Somerville
      title: "General Meet",
      type: "general",
      count: 20,
      avatar: "https://picsum.photos/seed/user6/200/300",
    },
  ];

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "events":
        return Events;
      case "sos":
        return SOS;
      case "aid":
        return AID;
      case "chillin":
        return Chillin;
      case "moment":
        return Moment;
      case "general":
      default:
        return MapPin;
    }
  };

  const toggleLike = (postId: number) => {
    setPosts((prevPosts) => {
      if (tabActive === "community" || tabActive === "yourfriends") {
        return {
          ...prevPosts,
          [tabActive]: prevPosts[tabActive as keyof typeof prevPosts].map((post: any) =>
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
        return <Tabs.TabCommunity posts={posts.community as post[]} toggleLike={toggleLike} />;
      case "trending":
        return <Tabs.TabTrending trendings={posts.trending as trend[]} />;
      case "yourfriends":
        return <Tabs.TabYourFriends posts={posts.yourfriends as post[]} toggleLike={toggleLike} />;
      default:
        return null;
    }
  };

  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permissão Necessária", "É necessário permitir o acesso às fotos para selecionar uma imagem.");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert("Permissão Necessária", "É necessário permitir o acesso à câmera para tirar uma foto.");
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!pickerResult.canceled) {
      setProfileImage(pickerResult.assets[0].uri);
    }
  };

  const handleAddStory = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancelar", "Tirar Foto", "Escolher da Galeria"],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            handleTakePhoto();
          } else if (buttonIndex === 2) {
            handlePickImage();
          }
        }
      );
    } else {
      Alert.alert(
        "Adicionar Story",
        "Escolha uma opção",
        [
          {
            text: "Cancelar",
            style: "cancel",
          },
          {
            text: "Tirar Foto",
            onPress: handleTakePhoto,
          },
          {
            text: "Escolher da Galeria",
            onPress: handlePickImage,
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <Layout titleHeader="yankee">
      <S.Container>
        <S.Content>
          <FlatList
            data={["content"]}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View>
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
                          <S.ContainerStory onPress={handleAddStory}>
                            <S.AddStory>
                              <S.Text style={{ fontSize: 32 }}>+</S.Text>
                            </S.AddStory>
                            <S.Text>Add</S.Text>
                          </S.ContainerStory>
                        );
                      }

                      return (
                        <S.ContainerStory onPress={() => router.push(`/(tabs)/stories?id=${item.id}`)}>
                          <S.Story>
                            {imageLoading && <Loading />}
                            <Image
                              resizeMode="cover"
                              onLoadEnd={() => setImageLoading(false)}
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
                  <S.FilterContainer>
                    {filters.map((item) => {
                      const IconComponent = iconMapping[item as keyof typeof iconMapping];

                      return (
                        <S.FilterItem
                          key={item}
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

                  <S.MapContainer>
                    <MapView
                      style={{ flex: 1 }}
                      initialRegion={{
                        latitude: 42.3601,
                        longitude: -71.0589,
                        latitudeDelta: 0.08,
                        longitudeDelta: 0.08,
                      }}
                    >
                      {/* {mapMarkers.map((marker) => (
                        <Marker
                          key={marker.id}
                          coordinate={marker.coordinate}
                          title={marker.title}
                          description={`${marker.count} people`}
                        >
                          <S.SimpleMarker type={marker.type}>
                            <S.MarkerCountText>{marker.count}</S.MarkerCountText>
                          </S.SimpleMarker>
                        </Marker>
                      ))} */}
                    </MapView>
                  </S.MapContainer>

                  <S.Addevent activeOpacity={0.5} onPress={() => setModalAddEvent(true)}>
                    <S.Text fontWeight={700} fontSize="15px">
                      +
                    </S.Text>
                  </S.Addevent>
                </S.ContainerMaps>

                <S.ContainerTabs>
                  <S.Tabs>
                    {mocks.tabs.community.map((tab) => (
                      <S.Tab key={tab.id} onPress={() => setTabActive(tab.value)}>
                        <S.Text tabs color={tabActive === tab.value ? "#fff" : "#4d4c4c"}>
                          {tab.label}
                        </S.Text>
                      </S.Tab>
                    ))}
                  </S.Tabs>
                  <S.ContentPost>
                    <S.InputContainer>
                      <S.ContentInputUser>
                        <TouchableOpacity>
                          <Image
                            source={{
                              uri: "https://picsum.photos/seed/1/200/300",
                            }}
                            style={{
                              width: 35,
                              height: 35,
                              borderRadius: 100,
                              marginTop: 10 ,
                              marginLeft: 10 ,
                            }}
                            resizeMode="cover"
                          />
                        </TouchableOpacity>
                        <S.InputPost placeholder="What's new?" placeholderTextColor="#FFFFFF" />
                      </S.ContentInputUser>
                      <S.ContentIconButton>
                        <TouchableOpacity>
                        <Filter />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <LibraryPhoto />
                      </TouchableOpacity>
                        <TouchableOpacity>
                          <S.ButtonPost>
                            <S.Text
                              color="#171717"
                              tabs
                              style={{
                                fontSize: 9,
                                fontWeight: 500,
                                fontFamily: "Poppins-Medium",
                              }}
                            >
                              Post
                            </S.Text>
                          </S.ButtonPost>
                        </TouchableOpacity>
                      </S.ContentIconButton>
                    </S.InputContainer>
                    
                  </S.ContentPost>
                </S.ContainerTabs>
              </View>
            )}
            renderItem={() => renderTabContent()}
          />
        </S.Content>

        <ModalGeneric
          modalVisible={isModalAddEvent}
          setModalVisible={setModalAddEvent}
          style={{ backgroundColor: "transparent" }}
        >
          <S.CardAddEvent>
            <S.Header>
              <TouchableOpacity activeOpacity={0.5} onPress={() => setModalAddEvent(false)}>
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
