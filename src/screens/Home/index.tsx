import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import GestureRecognizer from "react-native-swipe-gestures";
import {
  Layout,
  Comment,
  CardPost,
  GenericCommet,
  GenericBottomSheet,
} from "@/components/organism";
import * as S from "./styles";
import Heart from "@/assets/icons/Heart";
import { mocks } from "@/services/mocks";
import {
  CommentSendIcon,
  Location,
  LocationTarget,
  Menu,
} from "@/assets/icons";
import { formatNumber } from "@/utils/utils";

const { width } = Dimensions.get("screen");

// Interface para o tipo de comentário
interface CommentType {
  id: number;
  likes: number;
  time: string;
  name: string;
  avatar: string;
  description: string;
  answers: CommentType[];
}

export const Home = () => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyText, setReplyText] = useState("");
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [comments, setComments] = useState<CommentType[]>(
    mocks.posts[0].comments as CommentType[]
  );
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [collapsedComments, setCollapsedComments] = useState<Set<number>>(
    new Set()
  );

  const handleSnapPress = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleSubmitComment = (text: string) => {
    const newComment: CommentType = {
      id: comments.length + 1,
      likes: 0,
      time: "Just now",
      name: "Sophia Carter",
      avatar: "https://picsum.photos/seed/108/200/300",
      description: text,
      answers: [],
    };
    setComment("");
    setComments([newComment, ...comments]);
  };

  const handleReply = (commentId: number, userName: string) => {
    setReplyingTo(commentId);
    setReplyText(`@${userName} `);
    bottomSheetRef.current?.expand();
  };

  const handleSubmitReply = () => {
    if (!replyingTo || !replyText.trim()) return;

    const newReply: CommentType = {
      id: Date.now(),
      likes: 0,
      time: "Just now",
      name: "Sophia Carter",
      avatar: "https://picsum.photos/seed/108/200/300",
      description: replyText,
      answers: [],
    };

    const updatedComments = comments.map((comment) => {
      if (comment.id === replyingTo) {
        return {
          ...comment,
          answers: [...(comment.answers || []), newReply],
        };
      }
      return comment;
    });

    setComments(updatedComments);
    setReplyText("");
    setReplyingTo(null);
  };

  const handleSwipeLeft = () => {
    if (currentPostIndex < mocks.posts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
    }
  };

  const handleOpenLive = (postId: number) => {
    router.push(`/live?liveId=${postId}`);
  };

  const currentPost = mocks.posts[currentPostIndex];
  const isLivePost = currentPost.type === "live";

  const toggleCommentReplies = (commentId: number) => {
    const newCollapsed = new Set(collapsedComments);
    if (newCollapsed.has(commentId)) {
      newCollapsed.delete(commentId);
    } else {
      newCollapsed.add(commentId);
    }
    setCollapsedComments(newCollapsed);
  };

  return (
    <>
      <Layout style={{ position: "relative" }} titleHeader="yankee">
        {/* <TouchableOpacity onPress={handleStartLive}>
          <S.StartLiveButton>
            <S.Text color="#fff" fontSize="12px" fontWeight={`bold`}>📹 Live</S.Text>
          </S.StartLiveButton>
        </TouchableOpacity> */}
        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}
        >
          <S.Container style={{ minWidth: width }}>
            <S.Content>
              <CardPost
                key={currentPost.id}
                name={currentPost.user.name}
                buttonHeader={<Menu />}
                userTag={
                  isLivePost ? (
                    <S.LiveBadge>
                      <LocationTarget color="#F00D0D" />
                      <S.Text color="#F00D0D">{currentPost.timestamp}</S.Text>
                    </S.LiveBadge>
                  ) : (
                    <S.Text color="#DCDADA">{currentPost.timestamp}</S.Text>
                  )
                }
                avatar={currentPost.user.avatar}
              >
                <TouchableOpacity
                  activeOpacity={isLivePost ? 0.8 : 1}
                  onPress={
                    isLivePost
                      ? () => handleOpenLive(currentPost.id)
                      : undefined
                  }
                >
                  <S.ImageBackground
                    resizeMode="cover"
                    source={{
                      uri: currentPost.image,
                    }}
                  >
                    <S.GradientOverlay
                      colors={["transparent", "rgba(0, 0, 0, 0.65)"]}
                      start={[0, 0]}
                      end={[0, 0.6]}
                    />
                    <S.ContentCard>
                      <S.Header>
                        <S.Text fontSize={"12px"}>
                          {currentPost.location}
                        </S.Text>
                        <S.Icon>
                          <Location />
                        </S.Icon>
                      </S.Header>

                      <S.ContainerInfo>
                        <S.ContainerChips>
                          <S.AvatarChips>
                            {currentPost.listAvatarStack?.map((item, index) => (
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
                            {isLivePost
                              ? currentPost.viewers
                              : formatNumber(currentPost.likes)}
                          </S.Text>
                        </S.ContainerChips>
                        <TouchableOpacity
                          onPress={() => setLiked((prev) => !prev)}
                        >
                          <Heart color={liked ? "#F2F2F2" : ""} />
                        </TouchableOpacity>
                        <S.Text fontSize={"12px"}>
                          {currentPost.description}
                        </S.Text>

                        {!isLivePost && (
                          <TouchableOpacity onPress={handleSnapPress}>
                            <Comment
                              name={currentPost.last_comment?.name || ""}
                              avatar={currentPost.last_comment?.avatar || ""}
                              description={
                                currentPost.last_comment?.description || ""
                              }
                            />
                          </TouchableOpacity>
                        )}
                      </S.ContainerInfo>
                    </S.ContentCard>
                  </S.ImageBackground>
                </TouchableOpacity>
              </CardPost>
            </S.Content>
          </S.Container>
        </GestureRecognizer>
      </Layout>

      <GenericBottomSheet ref={bottomSheetRef} size={-1}>
        <S.ListComments contentContainerStyle={{ flexGrow: 1 }}>
          {comments.map((item) => (
            <View key={item.id}>
              <GenericCommet
                {...item}
                onReply={() => handleReply(item.id, item.name)}
              />
              {item.answers && item.answers.length > 0 && (
                <>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 16,
                      paddingVertical: 8,
                      marginTop: 5,
                    }}
                    onPress={() => toggleCommentReplies(item.id)}
                  >
                    <View
                      style={{
                        height: 1,
                        backgroundColor: "#333",
                        marginRight: 8,
                        width: 35,
                      }}
                    />
                    <S.Text style={{ color: "#ffffff", fontSize: 12 }}>
                      {collapsedComments.has(item.id)
                        ? `View ${item.answers.length} replies`
                        : "View fewer comments"}
                    </S.Text>
                  </TouchableOpacity>
                  {!collapsedComments.has(item.id) && (
                    <View style={{ marginLeft: 20 }}>
                      {item.answers.map((answer) => (
                        <GenericCommet
                          key={answer.id}
                          {...answer}
                          onReply={() => handleReply(item.id, answer.name)}
                        />
                      ))}
                    </View>
                  )}
                </>
              )}
              <S.Line />
            </View>
          ))}
        </S.ListComments>

        <S.ContainerInput>
          <S.Avatar
            resizeMode="cover"
            source={{
              uri: "https://picsum.photos/seed/35/200/300",
            }}
          />
          <TextInput
            value={replyingTo ? replyText : comment}
            style={styles.textInput}
            placeholder={replyingTo ? "Write a reply..." : "Add a comment"}
            placeholderTextColor="#2D2D2D"
            onChangeText={(value: string) => {
              if (replyingTo) {
                setReplyText(value);
              } else {
                setComment(value);
              }
            }}
          />
          <TouchableOpacity
            onPress={() => {
              if (replyingTo) {
                handleSubmitReply();
              } else {
                handleSubmitComment(comment);
              }
            }}
          >
            <CommentSendIcon color="white" />
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
