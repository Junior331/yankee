import React, { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useFocusEffect } from "expo-router";
import { Modal, TouchableOpacity, StyleSheet, Animated, PanResponder } from "react-native";
import { Image } from "expo-image";
import { CircleArrowUpRight, Hearts, LeftArrow, MoodSmile } from "@/assets/icons";
import * as S from "./styles";

const stories = [
  {
    id: 1,
    image: "https://s3-alpha-sig.figma.com/img/4371/65a2/ed734415a16b8c872affd12056ebae4b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uC07bt0e50P466~AdYu1VHECe~eUwOaBa6H5XISkIykWJILTb2Qc1niRmHP~2CWHP4E3yLEpmOtuqMybFXPc4WZFzc4OmRq7owfwkpJ713YPWCEpbCmkhKVVatlbReW9r4zc0nEbtYs0zbKyiMPxlirdozwMRSVPlbw0ncq2M3DDdYyuW6MWBqdaAv~o5bjvc9Bj89TSuI65IuBEJS1O~nqxzYasAdXFLvO8it-d7OaDOkxNifLkL5qE6J21x3wUumiALTPoZ1n~Fllu5UL2RcUpMjFR1mAWo68S7ubTE-pFX0yLf3x6us8ky7ohvbuol-JA20sj33u4~4OeezfyMw__",
  },
  {
    id: 2,
    image: "https://s3-alpha-sig.figma.com/img/6e8c/014b/0db172b23b29f47fdb6dceff7dd01b36?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Veru3548B7L2mhRrCjb6vOwvWcqUccfWw-KRNl~667zUM94Aca9gKSSqpp3sjet88lYZTwbasYNkyJ~OwEtT0nRcUeMHTQOT00ql16hHePyUGCeMsFNfJjFXxWfF6TvN9838f4EVp74skckRv1IyB6jQGZQ0TBJK~Zc8dHbckLfHvHdDSlG4NAJQjjt9id6SkSudOsZJiAh9ys9SeJJdJ7ecS8~EkFjdGELNU1VkONnbXNRzeUA3MXssinvDYek0N-Ob0IUxJBtCDFeviNpiZEZ8OQU0oEIpjxxCCxrCpWeS7Ppj6KP6kmN6cIoeIEQXT1hvO1B8WCBEcYX5aXfatg__",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/54/30/a2/5430a2f3e1e76de0afdb680814c42bce.jpg",
  },
];

const STORY_DURATION = 5000; // 5 segundos por story

const ProgressBar = ({ progress, onPress }: { progress: any; onPress: any }) => (
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
          source={{ uri: user.avatar }}
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
          resizeMode="cover"
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
  <S.Containerbotton>
    <S.InputContainer>
      <S.AttachmentButton>
        <TouchableOpacity>
          <MoodSmile />
        </TouchableOpacity>
      </S.AttachmentButton>
      <S.Input placeholder="Text Here..." placeholderTextColor="#ffff" />
    </S.InputContainer>
    <S.VoiceButton>
      <Hearts color="#ffffff" width={25} height={25} />
      <CircleArrowUpRight />
    </S.VoiceButton>
  </S.Containerbotton>
);

// Áreas clicáveis transparentes
const TransparentArea = ({ onPress, position }: { onPress: any; position: "left" | "right" }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.transparentArea, position === "left" ? styles.leftArea : styles.rightArea]}
  />
);

// Área central transparente para fechar o modal
const TransparentMiddleArea = ({ panHandlers }: { panHandlers: any }) => (
  <TouchableOpacity
    style={styles.middleArea}
    {...panHandlers}
  />
);

const styles = StyleSheet.create({
  transparentArea: {
    position: "absolute",
    top: 100, // Começa abaixo do cabeçalho
    bottom: 100, // Termina acima do rodapé
    width: "20%", // Largura reduzida
  },
  leftArea: {
    left: 0,
  },
  rightArea: {
    right: 0,
  },
  middleArea: {
    position: "absolute",
    top: 100,
    bottom: 100,
    left: "40%", // Centralizado horizontalmente
    width: "20%", // Largura reduzida
    zIndex: 1,
  },
});

export const Stories = () => {
  const router = useRouter();
  const [currentStory, setCurrentStory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const startTimeRef = useRef<number>(performance.now());
  const animationFrameRef = useRef<number | null>(null);
  const pan = useRef(new Animated.ValueXY()).current;

  const user = {
    avatar: "https://s3-alpha-sig.figma.com/img/1711/8d51/d22a22752beaac6d603ffa8392286385?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SBIdTSzHW6A0FunNiIFtDBepgMceaMALNgCvnG3AtqnUTIBLubThK9NF2oPrKkUSfUnNHcw0XarZsL4fGIrV0PgJk143HyxKP8e~5LSC333d0BDxqtsB-ouFHMB8Rz9bNweQIMl8j2xWhIzxBz-~9iVqsL3cgZmJQHujz1-AHBPl0amGr6PcjI5xc8WKfX~mdH5hfgWVbtHMMEgfPgDwcY5wKh9ZMqNM~iI34~Pr8hK4MVERZwHz-oKNelpJJ4UUkcO9q4FSWqPfkodUwLkHU7HRgaWqCvXsJeI06UWc8HbDbOJm3jfvxzyAFCpSJ-z1UvGjihuWVrvXlcGgAXnIzQ__",
    name: "Bruno Lipe",
    username: "@Bruno_Lipe",
  };

  const handleNextStory = useCallback(() => {
    setProgress(0);
    setCurrentStory((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
    startTimeRef.current = performance.now();
  }, []);

  const handlePreviousStory = useCallback(() => {
    setProgress(0);
    setCurrentStory((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
    startTimeRef.current = performance.now();
  }, []);

  const handleBack = () => {
    setIsModalVisible(false);
    router.push("/(tabs)/community");
  };

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

  useFocusEffect(
    useCallback(() => {
      setIsModalVisible(true);
      setCurrentStory(0);
      setProgress(0);
      startTimeRef.current = performance.now();

      return () => {
        setIsModalVisible(false);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
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
        handleNextStory();
      }
    };

    if (isModalVisible) {
      animationFrameRef.current = requestAnimationFrame(animateProgress);
    }

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isModalVisible, currentStory, handleNextStory]);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}
      onDismiss={() => setIsModalVisible(false)}
    >
      <Animated.View
        style={{ transform: [{ translateY: pan.y }], flex: 1 }}
        {...panResponder.panHandlers}
      >
        <S.Container>
          <S.ImageBackground resizeMode="cover" source={{ uri: stories[currentStory].image }}>
            <S.StoryContent>
              <S.ProgressContainer>
                {stories.map((story, index) => (
                  <ProgressBar
                    key={story.id}
                    progress={index === currentStory ? progress : index < currentStory ? 100 : 0}
                    onPress={() => {
                      setCurrentStory(index);
                      setProgress(0);
                      startTimeRef.current = performance.now();
                    }}
                  />
                ))}
              </S.ProgressContainer>
              <StoryHeader onBack={handleBack} user={user} />
            </S.StoryContent>
            {/* Áreas clicáveis transparentes */}
            <TransparentArea onPress={handlePreviousStory} position="left" />
            <TransparentArea onPress={handleNextStory} position="right" />
            {/* Área central transparente para fechar o modal */}
            <TransparentMiddleArea panHandlers={panResponder.panHandlers} />
          </S.ImageBackground>
          <StoryFooter />
        </S.Container>
      </Animated.View>
    </Modal>
  );
};