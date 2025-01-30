import * as React from "react";
import { FlatList } from "react-native-gesture-handler";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import * as S from "./styles";
import {
  Layout,
  Comment,
  CardPost,
  ModalGeneric,
  GenericCommet,
  FindCity,
} from "@/components/organism";
import Heart from "@/assets/icons/Heart";
import { useRef, useState } from "react";
import { mocks } from "@/services/mocks";
import { Slider } from "@/components/elements";
import { Filter, Location, Menu } from "@/assets/icons";

export const Home = () => {
  const [liked, setLiked] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterActive, setFilterActive] = useState("");
  const modalRef = useRef<{ openModal: () => void; closeModal: () => void }>(
    null
  );

  const handleOpen = () => {
    modalRef.current?.openModal();
  };

  const handleSetFilter = (value: string, state?: boolean) => {
    setFilterActive(value);
    console.log("value ÇÇ", value);
    setShowFilter(state || false);
  };

  return (
    <Layout
      style={{ position: "relative" }}
      titleHeader="yankee"
      iconHeader={
        <TouchableOpacity onPress={() => handleSetFilter("", !showFilter)}>
          <Filter />
        </TouchableOpacity>
      }
    >
      <S.Container>
        <S.Content>
          <FlatList
            // horizontal
            data={mocks.posts.slice(2, 3)}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => {
              return (
                <CardPost
                  key={item.id}
                  name={item.user.name}
                  buttonHeader={<Menu />}
                  avatar={item.user.avatar}
                  timestamp={item.timestamp}
                >
                  <S.ImageBackground
                    resizeMode="cover"
                    source={{
                      uri: item.image,
                    }}
                  >
                    <S.GradientOverlay
                      colors={["transparent", "rgba(0, 0, 0, 0.65)"]}
                      start={[0, 0]}
                      end={[0, 0.6]}
                    />
                    <S.ContentCard>
                      <S.Header>
                        <S.Text fontSize={"12px"}>{item.location}</S.Text>
                        <S.Icon>
                          <Location />
                        </S.Icon>
                      </S.Header>

                      <S.ContainerInfo>
                        <S.ContainerChips>
                          <S.AvatarChips>
                            {item.listAvatarStack?.map((item, index) => (
                              <S.Avatar
                                key={index}
                                resizeMode="cover"
                                source={{ uri: item.avatar }}
                                style={[
                                  {
                                    marginTop: index === 0 ? 0 : -5,
                                  },
                                ]}
                              />
                            ))}
                          </S.AvatarChips>

                          <S.Text color={"#A5A4A4"} style={styles.likesCount}>
                            {item.likes}k
                          </S.Text>
                        </S.ContainerChips>
                        <TouchableOpacity
                          onPress={() => setLiked((prev) => !prev)}
                        >
                          <Heart color={liked ? "#F2F2F2" : "transparent"} />
                        </TouchableOpacity>
                        <S.Text fontSize={"12px"}>{item.description}</S.Text>

                        <TouchableOpacity onPress={() => handleOpen()}>
                          <Comment
                            name={item.last_comments?.name || ""}
                            avatar={item.last_comments?.avatar || ""}
                            description={item.last_comments?.description || ""}
                          />
                        </TouchableOpacity>
                      </S.ContainerInfo>
                    </S.ContentCard>
                  </S.ImageBackground>
                  <ModalGeneric
                    ref={modalRef}
                    durationOpen={900}
                    toValueClose={900}
                    durationClose={900}
                    style={{ minHeight: "100%" }}
                  >
                    <S.ListComments>
                      {item.comments.map((item, index) => (
                        <View key={index}>
                          <GenericCommet {...item} />
                          <S.Line />
                        </View>
                      ))}
                    </S.ListComments>
                  </ModalGeneric>
                </CardPost>
              );
            }}
          />
        </S.Content>
      </S.Container>

      {showFilter && filterActive !== "Miles" && filterActive !== "City" && (
        <S.ContainerFilter>
          {mocks.optionsFilter.map((item) => (
            <>
              <S.OptionFilter
                key={item.id}
                onPress={() => handleSetFilter(item.value, true)}
              >
                {item.icon}
                <S.Text fontSize={"12px"}>{item.label}</S.Text>
              </S.OptionFilter>
              <S.Line />
            </>
          ))}
        </S.ContainerFilter>
      )}

      {showFilter && filterActive === "Miles" && (
        <S.ContainerFilter width="220px">
          <Slider />
        </S.ContainerFilter>
      )}

      {showFilter && filterActive === "City" && (
        <S.ContainerFilter width="220px">
          <FindCity />
        </S.ContainerFilter>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  likesCount: {
    marginTop: 5,
    fontSize: 12,
    color: "#A5A4A4",
    fontWeight: "bold",
  },
});
