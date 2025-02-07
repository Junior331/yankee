import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import MapView, { Marker, Circle } from "react-native-maps";
import { Image, TouchableOpacity, View } from "react-native";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { Chat, Heart, Menu } from "@/assets/icons";
import { CardPost, Layout } from "@/components/organism";
import { DynamicGrid } from "@/components/modules";

export const Community = () => {
  const [tabActive, setTabActive] = useState("community");
  const [posts, setPosts] = useState(mocks.postsCommunity);

  const toggleLike = (postId: number) => {
    setPosts((prevPosts) => ({
      ...prevPosts,
      [tabActive]: prevPosts[tabActive as keyof typeof prevPosts].map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes + (post.liked ? -1 : 1),
              liked: !post.liked,
            }
          : post
      ),
    }));
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
                  <S.ContainerStory>
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
              initialRegion={{
                latitude: 42.3601,
                longitude: -71.0589,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={{ latitude: 42.3601, longitude: -71.0589 }}
                title="Boston Center"
                description="Local central de Boston"
              />
              <Marker
                coordinate={{ latitude: 42.3701, longitude: -71.0389 }}
                title="Outro local"
                pinColor="blue"
              />

              <Circle
                center={{ latitude: 42.3601, longitude: -71.0589 }}
                radius={2000} // raio em metros
                fillColor="rgba(0, 123, 255, 0.3)"
                strokeColor="rgba(0, 123, 255, 0.5)"
              />
            </MapView>
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

          <S.ContainerNotions>
            {posts[tabActive as keyof typeof posts]?.map((item) => {
              return (
                <CardPost
                  key={item.id}
                  name={item.user.name}
                  style={{ marginBottom: 20, gap: 16 }}
                  buttonHeader={
                    <S.ButtonFollow>
                      <S.Text
                        color="#171717"
                        tabs
                        style={{
                          fontSize: 8,
                          fontWeight: 500,
                          fontFamily: "Poppins-Medium",
                        }}
                      >
                        Follow
                      </S.Text>
                      <S.IconAdd>
                        <S.Text tabs style={{ fontSize: 8, marginTop: -1.4 }}>
                          +
                        </S.Text>
                      </S.IconAdd>
                    </S.ButtonFollow>
                  }
                  avatar={item.user.avatar}
                  timestamp={item.timestamp}
                >
                  <S.Text color={"#FFFFFF"}>{item.description}</S.Text>

                  <DynamicGrid items={item.image} />

                  <S.FooterCardPost>
                    <S.ContainerInteractions>
                      <S.ContainerIcon onPress={() => toggleLike(item.id)}>
                        <Heart
                          width={15}
                          height={13}
                          color={item.liked ? "#d63838" : ""}
                        />
                        <S.Text color={"#FFFFFF"}>{item.likes}</S.Text>
                      </S.ContainerIcon>
                      <S.ContainerIcon>
                        <TouchableOpacity>
                          <Chat color={"#F2F2F2"} />
                        </TouchableOpacity>
                        <S.Text color={"#FFFFFF"}>
                          {item.comments.length}
                        </S.Text>
                      </S.ContainerIcon>
                    </S.ContainerInteractions>
                    <View style={{ transform: "rotate(90deg)" }}>
                      <Menu width={12} height={12} color="#fff" />
                    </View>
                  </S.FooterCardPost>
                </CardPost>
              );
            })}
          </S.ContainerNotions>
        </S.Content>
      </S.Container>
    </Layout>
  );
};
