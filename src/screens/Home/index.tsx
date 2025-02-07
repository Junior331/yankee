import BottomSheet from "@gorhom/bottom-sheet";
import { FlatList } from "react-native-gesture-handler";
import React, { useCallback, useContext, useRef, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
} from "react-native";

import {
  Layout,
  Comment,
  CardPost,
  FindCity,
  GenericCommet,
  GenericBottomSheet,
} from "@/components/organism";
import * as S from "./styles";
import Heart from "@/assets/icons/Heart";
import { mocks } from "@/services/mocks";
import { Slider } from "@/components/elements";
import { Filter, Location, Menu } from "@/assets/icons";
import { TabVisibilityContext } from "@/contexts/tabVisibility";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");

export const Home = () => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [filterActive, setFilterActive] = useState("");
  const { setIsVisibility } = useContext(TabVisibilityContext);
  const [comments, setComments] = useState(mocks.posts[0].comments);

  const handleSetFilter = (value: string, state?: boolean) => {
    setFilterActive(value);
    setShowFilter(state || false);
  };

  const handleSnapPress = useCallback(() => {
    setIsVisibility(false);
    bottomSheetRef.current?.expand();
  }, []);

  const handleSubmitComment = (text: string) => {
    const newComment = {
      id: comments.length + 1,
      likes: 0,
      time: "Just now",
      name: "Sophia Carter",
      avatar:
        "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bq8LWtLHJ0eZG7KC9CDCGPoAe~~jxECquROVJsCnt-jTb-2TLe0cI2i1qBHKEeeXozl0DEJJ7-m37kmq0em8MP3wN3-YEKv1EHuVHMS9C8Vtxud3Fb5UzY0R~iC4W-YqV~QfD3L6b2MCy7enu3cK1PObYZ7kiSrHWrULC8KFcSpiZXhEYwmQx5oxRnm~Ouriia8zQIm7j~diwYe0uvq2UaPN6ea5LQBk~5inkyujZLL5sxm2lL~NF0XZ2oyOSzSDyGAe9CR3GgnLzcXtlqhFM1MtLczVvqrM0fZ9MKL1Hi-AW4sa8zji9-EE8jJneCyCJcoHm6XCk0O9VPTROouHVA__",
      description: text,
      answers: [],
    };
    setComment("");
    setComments([newComment, ...comments]);
  };

  return (
    <>
      <Layout
        style={{ position: "relative" }}
        titleHeader="yankee"
        iconHeader={
          <TouchableOpacity onPress={() => handleSetFilter("", !showFilter)}>
            <Filter />
          </TouchableOpacity>
        }
      >
        <S.Container style={{ minWidth: width }}>
          <S.Content>
            <FlatList
              data={mocks.posts.slice(0, 1)}
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
                            <Heart color={liked ? "#F2F2F2" : ""} />
                          </TouchableOpacity>
                          <S.Text fontSize={"12px"}>{item.description}</S.Text>

                          <TouchableOpacity onPress={() => handleSnapPress()}>
                            <Comment
                              name={item.last_comments?.name || ""}
                              avatar={item.last_comments?.avatar || ""}
                              description={
                                item.last_comments?.description || ""
                              }
                            />
                          </TouchableOpacity>
                        </S.ContainerInfo>
                      </S.ContentCard>
                    </S.ImageBackground>
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

      <GenericBottomSheet ref={bottomSheetRef} size={-1}>
        <S.ListComments contentContainerStyle={{ flexGrow: 1 }}>
          {comments.map((item, index) => (
            <View key={index}>
              <GenericCommet {...item} />
              <S.Line />
            </View>
          ))}
        </S.ListComments>
        <S.ContainerInput>
          <S.Avatar
            resizeMode="cover"
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/a6aa/9d30/dbcf7e2bf12699387be3b928f19d99ef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bq8LWtLHJ0eZG7KC9CDCGPoAe~~jxECquROVJsCnt-jTb-2TLe0cI2i1qBHKEeeXozl0DEJJ7-m37kmq0em8MP3wN3-YEKv1EHuVHMS9C8Vtxud3Fb5UzY0R~iC4W-YqV~QfD3L6b2MCy7enu3cK1PObYZ7kiSrHWrULC8KFcSpiZXhEYwmQx5oxRnm~Ouriia8zQIm7j~diwYe0uvq2UaPN6ea5LQBk~5inkyujZLL5sxm2lL~NF0XZ2oyOSzSDyGAe9CR3GgnLzcXtlqhFM1MtLczVvqrM0fZ9MKL1Hi-AW4sa8zji9-EE8jJneCyCJcoHm6XCk0O9VPTROouHVA__",
            }}
          />
          <TextInput
            value={comment}
            style={styles.textInput}
            placeholder="Add a comment"
            placeholderTextColor="#2D2D2D"
            onChangeText={(value: string) => setComment(value)}
          />
          <TouchableOpacity onPress={() => handleSubmitComment(comment)}>
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </S.ContainerInput>
      </GenericBottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  likesCount: {
    marginTop: 5,
    fontSize: 12,
    color: "#A5A4A4",
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    padding: 8,
    paddingLeft: 12,
    color: "#2D2D2D",
    borderRadius: 51,
    backgroundColor: "#DCDADA",
  },
});
