import React, { useState, useEffect } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Animated,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { CardPost, Layout } from "@/components/organism";
import { LocationTarget } from "@/assets/icons";
import GestureRecognizer from "react-native-swipe-gestures";

interface CommentType {
  id: number;
  likes: number;
  time: string;
  name: string;
  avatar: string;
  description: string;
  answers: CommentType[];
}

const simulatedComments = [
  {
    name: "Ryan Brooks",
    message: "Lorem ipsum sit dolor amet...",
    avatar: "https://picsum.photos/seed/user1/200/300",
  },
  {
    name: "Sophia Carter",
    message: "Lorem ipsum sit dolor amet...",
    avatar: "https://picsum.photos/seed/user2/200/300",
  },
  {
    name: "Liam Johnson",
    message: "Lorem ipsum sit dolor amet...",
    avatar: "https://picsum.photos/seed/user3/200/300",
  },
  {
    name: "Ana Costa",
    message: "🔥🔥🔥",
    avatar: "https://picsum.photos/seed/user4/200/300",
  },
  {
    name: "Pedro Oliveira",
    message: "Onde é esse lugar?",
    avatar: "https://picsum.photos/seed/user5/200/300",
  },
  {
    name: "Luciana Ferreira",
    message: "Que sonho! ✨",
    avatar: "https://picsum.photos/seed/user6/200/300",
  },
];

export const Live = () => {
  const router = useRouter();
  const { liveId } = useLocalSearchParams<{ liveId: string }>();
  const parsedLiveId = parseInt(liveId || "0", 10);

  const [comment, setComment] = useState("");
  const [isLiveActive] = useState(true);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [viewers, setViewers] = useState(908);
  const [animatedValues, setAnimatedValues] = useState<{[key: number]: Animated.Value}>({});
  const [exitingComments, setExitingComments] = useState<Set<number>>(new Set());

  const livePost = mocks.posts.find(
    (p) => p.id === parsedLiveId && p.type === "live"
  );

  // Simulação de comentários automáticos
  useEffect(() => {
    if (!isLiveActive) return;

    const commentInterval = setInterval(() => {
      const randomComment =
        simulatedComments[Math.floor(Math.random() * simulatedComments.length)];
      const newComment: CommentType = {
        id: Date.now() + Math.random(),
        likes: Math.floor(Math.random() * 20),
        time: "Agora",
        name: randomComment.name,
        avatar: randomComment.avatar,
        description: randomComment.message,
        answers: [],
      };

      setComments((prev) => {
        const willBeRemoved = prev.slice(2);
        
        willBeRemoved.forEach(comment => {
          const exitAnimValue = animatedValues[comment.id] || new Animated.Value(1);
          setExitingComments(prevExiting => new Set([...prevExiting, comment.id]));
          
          Animated.timing(exitAnimValue, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start(() => {
            setExitingComments(prevExiting => {
              const newExiting = new Set(prevExiting);
              newExiting.delete(comment.id);
              return newExiting;
            });
          });
        });
        
        const newComments = [newComment, ...prev.slice(0, 2)];
        
        // Criar animação para o novo comentário
        const animValue = new Animated.Value(0);
        setAnimatedValues(prevAnim => ({...prevAnim, [newComment.id]: animValue}));
        
        // Animar entrada do comentário
        Animated.timing(animValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
        
        return newComments;
      });
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(commentInterval);
  }, [isLiveActive]);

  // Simulação de viewers flutuando
  useEffect(() => {
    if (!isLiveActive) return;

    const viewerInterval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.floor(Math.random() * 10) - 5;
        return Math.max(900, prev + change);
      });
    }, 5000);

    return () => clearInterval(viewerInterval);
  }, [isLiveActive]);

  if (!livePost) {
    router.back();
    return null;
  }

  const handleSubmitComment = (text: string) => {
    if (!text.trim()) return;

    const newComment: CommentType = {
      id: Date.now(),
      likes: 0,
      time: "Just now",
      name: "Você",
      avatar: "https://picsum.photos/seed/user/200/300",
      description: text,
      answers: [],
    };

    setComment("");
    setComments((prev) => {
      const willBeRemoved = prev.slice(4);
      willBeRemoved.forEach(comment => {
        const exitAnimValue = animatedValues[comment.id] || new Animated.Value(1);
        setExitingComments(prevExiting => new Set([...prevExiting, comment.id]));
        
        Animated.timing(exitAnimValue, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          setExitingComments(prevExiting => {
            const newExiting = new Set(prevExiting);
            newExiting.delete(comment.id);
            return newExiting;
          });
        });
      });
      
      const newComments = [newComment, ...prev.slice(0, 2)];
      
      // Criar animação para o novo comentário
      const animValue = new Animated.Value(0);
      setAnimatedValues(prevAnim => ({...prevAnim, [newComment.id]: animValue}));
      
      // Animar entrada do comentário
      Animated.timing(animValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      
      return newComments;
    });
  };

  const { width } = Dimensions.get("screen");

  return (
    <Layout style={{ position: "relative" }} titleHeader="yankee">
      <GestureRecognizer style={{ flex: 1 }}>
        <S.Container style={{ minWidth: width }}>
          <S.Content>
            <CardPost
              key={livePost.id}
              name={livePost.user.name}
              buttonHeader={
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => router.back()}
                >
                  <S.CloseIcon>✕</S.CloseIcon>
                </TouchableOpacity>
              }
              userTag={
                <S.LiveBadge>
                  <LocationTarget color="#F00D0D" />
                  <S.Text color="#F00D0D">{viewers}</S.Text>
                </S.LiveBadge>
              }
              avatar={livePost.user.avatar}
            >
              <S.ImageBackground
                resizeMode="cover"
                source={{
                  uri: livePost.image,
                }}
              >
                <S.LiveContainer>
                  <S.LiveTitleContainer>
                    <S.LiveTitle>TITULO DA LIVE</S.LiveTitle>
                  </S.LiveTitleContainer>

                  <S.LiveContent>
                    <S.LiveDescription>
                      I never tire of admiring this view before going to work.
                    </S.LiveDescription>

                    <S.LiveQuestion>What do you think guys?</S.LiveQuestion>

                    <S.LiveSubtext>Alere no dealedat</S.LiveSubtext>
                  </S.LiveContent>
                </S.LiveContainer>
                <S.GradientOverlay
                  colors={["transparent", "rgba(23, 23, 23, 0.95)"]}
                  start={[0, 0]}
                  end={[0, 0.6]}
                />
              </S.ImageBackground>
            </CardPost>
            <S.CommentsSection>
              <S.GradientTop
                colors={["rgba(23, 23, 23, 0.95)", "transparent"]}
                start={[0, 0]}
                end={[0, 0.4]}
              />
              {comments.slice(0, 4).reverse().map((comment, index) => {
                const animValue = animatedValues[comment.id] || new Animated.Value(1);
                const isExiting = exitingComments.has(comment.id);
                
                return (
                  <Animated.View
                    key={comment.id}
                    style={{
                      transform: [
                        {
                          translateY: animValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [50, 0],
                          }),
                        },
                        {
                          translateX: isExiting
                            ? animValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -300],
                              })
                            : 0,
                        },
                      ],
                      opacity: animValue.interpolate({
                        inputRange: [0, 0.3, 1],
                        outputRange: [0, 0.7, index === 1 ? 1 : 0.6],
                      }),
                    }}
                  >
                    <S.CommentItem>
                      <S.CommentAvatar
                        source={{ uri: comment.avatar }}
                        resizeMode="cover"
                      />
                      <View style={styles.commentContent}>
                        <S.CommentName>{comment.name}</S.CommentName>
                        <S.CommentText>{comment.description}</S.CommentText>
                      </View>
                    </S.CommentItem>
                  </Animated.View>
                );
              })}
              <S.GradientBottom
                  colors={["transparent", "rgba(23, 23, 23, 0.671)"]}
                  start={[0, 0]}
                  end={[0, 0.4]}
              />
            </S.CommentsSection>
            <S.CommentInputContainer>
              <TextInput
                value={comment}
                style={styles.commentInput}
                placeholder="Comente..."
                placeholderTextColor="#999"
                onChangeText={setComment}
                onSubmitEditing={() => handleSubmitComment(comment)}
              />
              <S.ActionIcons>
                <TouchableOpacity>
                  <S.ActionIcon>😊</S.ActionIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <S.ActionIcon>❤️</S.ActionIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <S.ActionIcon>ℹ️</S.ActionIcon>
                </TouchableOpacity>
                <TouchableOpacity>
                  <S.ActionIcon>📤</S.ActionIcon>
                </TouchableOpacity>
              </S.ActionIcons>
            </S.CommentInputContainer>
          </S.Content>

          <S.BottomSection></S.BottomSection>
        </S.Container>
      </GestureRecognizer>
    </Layout>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    marginLeft: 12,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  commentInput: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: "#fff",
    fontSize: 14,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
});
