import { Image } from "expo-image";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Modal,
  Animated,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import {
  Hearts,
  LeftArrow,
  MoodSmile,
  CircleArrowUpRight,
} from "@/assets/icons";

import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { STORY_DURATION } from "./utils";

const ProgressBar = ({
  progress,
  onPress,
}: {
  progress: any;
  onPress: any;
}) => (
  <S.ProgressBar onPress={onPress}>
    <S.Progress style={{ width: `${progress}%` }} />
  </S.ProgressBar>
);

const StoryHeader = ({ onBack, user }: { onBack: any; user: any }) => (
  <S.ContainerHeader>
    <S.ButtonIcon onPress={onBack}>
      <LeftArrow color="#ffffff" width={30} height={30} />
    </S.ButtonIcon>
    <S.ContainerUser>
      <S.ContainerAvatar>
        <Image
          resizeMode="cover"
          source={{ uri: user.avatar }}
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
        />
        <S.ContainerBadge>
          <S.Badge />
        </S.ContainerBadge>
      </S.ContainerAvatar>
      <S.ContainerText>
        <S.Title numberOfLines={1}>{user.name}</S.Title>
        <S.Text numberOfLines={2} color="#ffffff">
          {user.username}
        </S.Text>
      </S.ContainerText>
      <S.ButtonFollow>
        <S.Text
          color="#000000"
          style={{ fontSize: 9, fontWeight: 500, fontFamily: "Poppins-Medium" }}
        >
          Moment
        </S.Text>
        <Hearts width={11} height={11} />
      </S.ButtonFollow>
    </S.ContainerUser>
  </S.ContainerHeader>
);

const StoryFooter = () => (
  <S.Footer>
    <S.InputContainer>
      <S.AttachmentButton>
        <TouchableOpacity>
          <MoodSmile />
        </TouchableOpacity>
      </S.AttachmentButton>
      <S.Input placeholder="Text Here..." placeholderTextColor="#ffff" />
    </S.InputContainer>

    <TouchableOpacity>
      <Hearts color="#ffffff" width={25} height={25} />
    </TouchableOpacity>
    <TouchableOpacity>
      <CircleArrowUpRight />
    </TouchableOpacity>
  </S.Footer>
);

const TransparentArea = ({
  onPress,
  position,
}: {
  onPress: any;
  position: "left" | "right";
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.transparentArea,
      position === "left" ? styles.leftArea : styles.rightArea,
    ]}
  />
);

const TransparentMiddleArea = ({ panHandlers }: { panHandlers: any }) => (
  <TouchableOpacity style={styles.middleArea} {...panHandlers} />
);

export const Stories = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [progress, setProgress] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const [currentStory, setCurrentStory] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(performance.now());
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [currentUserId, setCurrentUserId] = useState(Number(id) || 1);

  const currentUser = mocks.storys[currentUserId];
  const currentUserStories = currentUser.stories || [];

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dy) > 10;
      },
      onPanResponderMove: (_, gestureState) => {
        pan.setValue({ x: 0, y: gestureState.dy });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          handleBack();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const handleNextStory = useCallback(() => {
    setProgress(0);
    if (currentStory < currentUserStories.length - 1) {
      setCurrentStory((prev) => prev + 1);
    } else {
      if (currentUserId < mocks.storys.length - 1) {
        setCurrentUserId((prev) => prev + 1);
        setCurrentStory(0);
      } else {
        handleBack();
      }
    }
    startTimeRef.current = performance.now();
  }, [currentStory, currentUserStories.length, currentUserId]);

  const handlePreviousStory = useCallback(() => {
    setProgress(0);

    if (currentStory > 0) {
      setCurrentStory((prev) => prev - 1);
    } else {
      const currentUserIndex = mocks.storys.findIndex(
        (user) => user.id === currentUserId
      );

      if (currentUserIndex > 0) {
        let prevUserIndex = currentUserIndex - 1;
        while (
          prevUserIndex >= 0 &&
          mocks.storys[prevUserIndex].id === "add_story"
        ) {
          prevUserIndex--;
        }

        if (prevUserIndex >= 0) {
          const prevUser = mocks.storys[prevUserIndex];
          setCurrentUserId(prevUser.id as number);
          setCurrentStory(prevUser.stories ? prevUser.stories.length - 1 : 0);
        }
      }
    }

    startTimeRef.current = performance.now();
  }, [currentStory, currentUserId]);

  const handleBack = () => {
    setIsModalVisible(false);
    router.push("/(tabs)/community");
  };

  useEffect(() => {
    setProgress(0);
    setCurrentStory(1);
    setCurrentUserId(Number(id) || 1);
    startTimeRef.current = performance.now();
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      setIsModalVisible(true);
      setCurrentStory(0);
      setProgress(0);
      startTimeRef.current = performance.now();

      return () => {
        setIsModalVisible(false);
        if (animationFrameRef.current)
          cancelAnimationFrame(animationFrameRef.current);
      };
    }, [])
  );

  useEffect(() => {
    const animateProgress = () => {
      const elapsedTime = performance.now() - startTimeRef.current;
      const newProgress = (elapsedTime / STORY_DURATION) * 100;

      if (newProgress < 100) {
        setProgress(newProgress);
        animationFrameRef.current = requestAnimationFrame(animateProgress);
      } else {
        setProgress(100);
        // Moveu a lógica para dentro do useEffect para evitar dependência de handleNextStory
        if (currentStory < currentUserStories.length - 1) {
          setCurrentStory((prev) => prev + 1);
        } else {
          if (currentUserId < mocks.storys.length - 1) {
            setCurrentUserId((prev) => prev + 1);
            setCurrentStory(0);
          } else {
            setIsModalVisible(false);
            router.push("/(tabs)/community");
          }
        }
        startTimeRef.current = performance.now();
        setProgress(0);
      }
    };

    if (isModalVisible) {
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    }

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isModalVisible, currentStory, currentUserId, currentUserStories.length, router]);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isModalVisible}
      onDismiss={() => setIsModalVisible(false)}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <Animated.View style={{ flex: 1 }} {...panResponder.panHandlers}>
        <S.Container style={{ flex: 1 }}>
          <S.ImageBackground
            resizeMode="cover"
            source={{ uri: currentUserStories[currentStory].image }}
          >
            <S.StoryContent>
              <S.ProgressContainer>
                {currentUserStories.map((story, index) => (
                  <ProgressBar
                    key={story.id}
                    progress={
                      index === currentStory
                        ? progress
                        : index < currentStory
                        ? 100
                        : 0
                    }
                    onPress={() => {
                      setCurrentStory(index);
                      setProgress(0);
                      startTimeRef.current = performance.now();
                    }}
                  />
                ))}
              </S.ProgressContainer>
              <StoryHeader onBack={handleBack} user={currentUser} />
            </S.StoryContent>
            <TransparentArea onPress={handlePreviousStory} position="left" />
            <TransparentArea onPress={handleNextStory} position="right" />
            <TransparentMiddleArea panHandlers={panResponder.panHandlers} />
          </S.ImageBackground>
          <StoryFooter />
        </S.Container>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  transparentArea: {
    top: 100,
    bottom: 100,
    width: "20%",
    position: "absolute",
  },
  leftArea: {
    left: 0,
  },
  rightArea: {
    right: 0,
  },
  middleArea: {
    top: 100,
    zIndex: 1,
    bottom: 100,
    left: "40%",
    width: "20%",
    position: "absolute",
  },
});
