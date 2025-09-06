import React, { useState, useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
  Animated,
  ScrollView,
  Modal,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as S from "./styles";
import { mocks } from "@/services/mocks";
import { CardPost, Layout } from "@/components/organism";
import {
  LocationTarget,
  Smile,
  HeartDonate,
  WarningCircle,
  Share,
  LeftArrow,
  DonationDone,
} from "@/assets/icons";
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
  const [commentHistory, setCommentHistory] = useState<CommentType[]>([]);
  const [viewers, setViewers] = useState(908);
  const [animatedValues, setAnimatedValues] = useState<{
    [key: number]: Animated.Value;
  }>({});
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDonationModalVisible, setIsDonationModalVisible] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationStep, setDonationStep] = useState<
    "amount" | "payment" | "processing" | "confirmation"
  >("amount");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");
  const [validationError, setValidationError] = useState<string>("");
  const scrollViewRef = useRef<ScrollView>(null);
  const translateY = useRef(new Animated.Value(0)).current;
  const spinValue = useRef(new Animated.Value(0)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

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

      // Adicionar ao histórico completo
      setCommentHistory((prev) => [newComment, ...prev]);

      setComments((prev) => {
        // Criar animação para o novo comentário
        const animValue = new Animated.Value(0);
        setAnimatedValues((prevAnim) => ({
          ...prevAnim,
          [newComment.id]: animValue,
        }));

        // Animar entrada do comentário
        Animated.timing(animValue, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }).start();

        // Manter apenas os 4 comentários mais recentes
        const newComments = [newComment, ...prev].slice(0, 4);

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

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, "");
    if (!numericValue) return "";
    const formattedValue = (parseInt(numericValue) / 100).toFixed(2);
    return `R$ ${formattedValue.replace(".", ",")}`;
  };

  const openDonationModal = () => {
    setIsDonationModalVisible(true);

    // Animate modal slide up and backdrop fade in
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startSpinAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  };

  const closeDonationModal = () => {
    // Hide modal immediately to prevent flash
    setIsDonationModalVisible(false);

    // Reset states immediately
    setDonationStep("amount");
    setSelectedAmount("");
    setCustomAmount("");
    setSelectedPaymentMethod("");

    // Reset animation values for next opening
    setTimeout(() => {
      translateY.setValue(600);
      backdropOpacity.setValue(0);
    }, 100);
  };

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event: any) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY, velocityY } = event.nativeEvent;

      // More sensitive thresholds for better UX on both platforms
      if (translationY > 100 || velocityY > 500) {
        closeDonationModal();
      } else if (translationY < -30) {
        // Prevent dragging up too much with spring animation
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 150,
          friction: 10,
        }).start();
      } else {
        // Snap back to original position
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
          tension: 150,
          friction: 10,
        }).start();
      }
    }
  };

  const validateAmount = () => {
    if (!selectedAmount && !customAmount) {
      setValidationError("Selecione ou insira um valor para doar");
      return false;
    }
    if (customAmount && parseInt(customAmount) < 100) {
      // Mínimo R$ 1,00
      setValidationError("Valor mínimo é R$ 1,00");
      return false;
    }
    setValidationError("");
    return true;
  };

  const validatePayment = () => {
    if (!selectedPaymentMethod) {
      setValidationError("Selecione uma forma de pagamento");
      return false;
    }
    setValidationError("");
    return true;
  };

  const handleNextStep = () => {
    if (donationStep === "amount") {
      if (validateAmount()) {
        setDonationStep("payment");
      }
    } else if (donationStep === "payment") {
      if (validatePayment()) {
        setDonationStep("processing");
        startSpinAnimation();
        // Simula processamento por 2 segundos
        setTimeout(() => {
          setDonationStep("confirmation");
          setTimeout(() => {
            closeDonationModal();
          }, 3000);
        }, 2000);
      }
    }
  };

  const handlePreviousStep = () => {
    setValidationError("");
    if (donationStep === "payment") {
      setDonationStep("amount");
    } else if (donationStep === "confirmation") {
      setDonationStep("payment");
    }
  };

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
    // Adicionar ao histórico completo
    setCommentHistory((prev) => [newComment, ...prev]);

    setComments((prev) => {
      // Criar animação para o novo comentário
      const animValue = new Animated.Value(0);
      setAnimatedValues((prevAnim) => ({
        ...prevAnim,
        [newComment.id]: animValue,
      }));

      // Animar entrada do comentário
      Animated.timing(animValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();

      // Manter apenas os 4 comentários mais recentes
      const newComments = [newComment, ...prev].slice(0, 4);

      return newComments;
    });
  };

  const { width } = Dimensions.get("screen");

  return (
    <Layout style={{ position: "relative" }} titleHeader="yankee" isShowHeader={false}>
      <GestureRecognizer style={{ flex: 1 }}>
        <S.Container style={{ minWidth: width }}>
          <S.Content>
            <CardPost
              styleHeader={{ paddingHorizontal: 14 }}
              key={livePost.id}
              name={livePost.user.name}
              buttonHeader={
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => router.back()}
                >
                  <S.Text color="#fff" fontSize="18px" fontWeight={`bold`}>
                    ✕
                  </S.Text>
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
                borderTopLeftRadius={32}
                borderTopRightRadius={32}
                source={{
                  uri: livePost.image,
                }}
              >
                <S.LiveContainer>
                  <S.LiveTitleContainer>
                    <S.Text
                      fontSize="12px"
                      fontWeight={600}
                      textTransform="uppercase"
                    >
                      TITULO DA LIVE
                    </S.Text>
                  </S.LiveTitleContainer>

                  <S.LiveContent>
                    <S.LiveDescription>
                      I never tire of admiring this view before going to work.
                    </S.LiveDescription>

                    <S.LiveQuestion color="#fff" fontSize="14px">
                      What do you think guys?
                    </S.LiveQuestion>
                    <S.Text color="#ffffff99" fontSize="12px">
                      Alere no dealedat
                    </S.Text>
                  </S.LiveContent>
                </S.LiveContainer>
                <S.GradientOverlay
                  colors={["transparent", "rgba(23, 23, 23, 0.85)"]}
                  start={[0, 0]}
                  end={[0, 0.6]}
                />
                <S.GradientBottom
                  start={[0, 0]}
                  end={[0, 0.6]}
                  height={`40px`}
                  colors={["transparent", "rgba(23, 23, 23, 0.95)"]}

                  // start={[0, 0]}
                  // end={[0, 1.2]}
                  // height={`40px`}
                  // colors={["transparent", "rgba(23, 23, 23, 0.95)", "transparent"]}
                />
              </S.ImageBackground>
            </CardPost>
            <S.CommentsSection>
              <S.GradientTop
                colors={["rgba(23, 23, 23, 0.95)", "transparent"]}
                start={[0, 0.4]}
                end={[0, 1.5]}
              />
              <ScrollView
                ref={scrollViewRef}
                style={{ flex: 1, maxHeight: 180 }}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
                scrollEnabled={true}
                contentContainerStyle={{ paddingVertical: 10 }}
                onScroll={(event) => {
                  setScrollPosition(event.nativeEvent.contentOffset.y);
                }}
                onScrollBeginDrag={() => {
                  setIsUserScrolling(true);
                }}
                onScrollEndDrag={() => {
                  setTimeout(() => {
                    setIsUserScrolling(false);
                  }, 1000);
                }}
                onContentSizeChange={(_contentWidth, contentHeight) => {
                  const scrollView = scrollViewRef.current;
                  if (!isUserScrolling && scrollView) {
                    const isNearBottom =
                      contentHeight - scrollPosition - 180 <= 50;
                    if (isNearBottom) {
                      setTimeout(() => {
                        scrollView.scrollToEnd({ animated: true });
                      }, 100);
                    }
                  }
                }}
              >
                {[...commentHistory].reverse().map((comment) => {
                  const animValue =
                    animatedValues[comment.id] || new Animated.Value(1);
                  const isRecentComment = comments.some(
                    (c) => c.id === comment.id
                  );

                  return (
                    <Animated.View
                      key={comment.id}
                      style={{
                        transform: [
                          {
                            translateY: isRecentComment
                              ? animValue.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [30, 0],
                                })
                              : 0,
                          },
                        ],
                        opacity: isRecentComment
                          ? animValue.interpolate({
                              inputRange: [0, 0.5, 1],
                              outputRange: [0, 0.7, 1],
                            })
                          : 0.7,
                      }}
                    >
                      <S.CommentItem>
                        <S.CommentAvatar
                          source={{ uri: comment.avatar }}
                          resizeMode="cover"
                        />
                        <View style={styles.commentContent}>
                          <S.Text
                            color="#fff"
                            fontSize="14px"
                            fontWeight={`bold`}
                          >
                            {comment.name}
                          </S.Text>
                          <S.CommentText color="#fff" fontSize="12px">
                            {comment.description}
                          </S.CommentText>
                        </View>
                      </S.CommentItem>
                    </Animated.View>
                  );
                })}
              </ScrollView>
              <S.GradientBottom
                colors={["transparent", "rgba(23, 23, 23, 0.95)"]}
                start={[0, 0]}
                end={[0, 0.6]}
              />
            </S.CommentsSection>
            <S.CommentInputContainer>
              <S.CommentInputWrapper>
                <TextInput
                  value={comment}
                  style={styles.commentInput}
                  placeholder="Comente..."
                  placeholderTextColor="#999"
                  onChangeText={setComment}
                  onSubmitEditing={() => handleSubmitComment(comment)}
                />
                <TouchableOpacity>
                  <S.IconButton>
                    <Smile color="#fff" />
                  </S.IconButton>
                </TouchableOpacity>
              </S.CommentInputWrapper>
              <S.ExternalActionIcons>
                <TouchableOpacity onPress={openDonationModal}>
                  <S.IconButton>
                    <HeartDonate color="#fff" />
                  </S.IconButton>
                </TouchableOpacity>
                <TouchableOpacity>
                  <S.IconButton>
                    <WarningCircle color="#fff" />
                  </S.IconButton>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSubmitComment(comment)}>
                  <S.IconButton>
                    <Share color="#fff" />
                  </S.IconButton>
                </TouchableOpacity>
              </S.ExternalActionIcons>
            </S.CommentInputContainer>
          </S.Content>

          <S.BottomSection></S.BottomSection>
        </S.Container>

        {/* Modal de Doação */}
        <Modal
          transparent={true}
          visible={isDonationModalVisible}
          onRequestClose={closeDonationModal}
          statusBarTranslucent={true}
        >
          <Animated.View
            style={[
              {
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
              { opacity: backdropOpacity },
            ]}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={1}
              onPress={closeDonationModal}
            />
            <PanGestureHandler
              onGestureEvent={onGestureEvent}
              onHandlerStateChange={onHandlerStateChange}
              activeOffsetY={5}
              failOffsetX={[-50, 50]}
              shouldCancelWhenOutside={false}
              enabled={true}
            >
              <Animated.View
                style={{
                  transform: [{ translateY: translateY }],
                }}
              >
                <S.DonationModal>
                  <S.ModalHandle />

                  {donationStep === "amount" && (
                    <>
                      <S.DonationTitle>
                        <S.Text color="#fff" fontSize="18px" fontWeight="bold">
                          Lorem ipsum (Donation)
                        </S.Text>
                      </S.DonationTitle>

                      <S.DonationDescription>
                        <S.Text color="#999" fontSize="14px">
                          Lorem ipsum sit dolor amet, lorem ipsum sit dolor.
                        </S.Text>
                      </S.DonationDescription>

                      <S.AmountContainer>
                        {["R$10", "R$25", "R$50", "R$55", "R$60", "R$65"].map(
                          (amount) => (
                            <TouchableOpacity
                              key={amount}
                              onPress={() => {
                                setSelectedAmount(amount);
                                setCustomAmount("");
                              }}
                            >
                              <S.AmountButton
                                selected={selectedAmount === amount}
                              >
                                <S.Text
                                  color={
                                    selectedAmount === amount ? "#000" : "#fff"
                                  }
                                  fontSize="14px"
                                  fontWeight="500"
                                >
                                  {amount}
                                </S.Text>
                              </S.AmountButton>
                            </TouchableOpacity>
                          )
                        )}
                      </S.AmountContainer>

                      <S.CustomAmountSection>
                        <S.Text color="#fff" fontSize="14px" fontWeight="500">
                          Valor desejado a doar:
                        </S.Text>
                        <S.CustomAmountInput>
                          <TextInput
                            value={
                              selectedAmount || formatCurrency(customAmount)
                            }
                            onChangeText={(text) => {
                              const numericValue = text.replace(/\D/g, "");
                              setCustomAmount(numericValue);
                              setSelectedAmount("");
                            }}
                            placeholder="Insira o valor"
                            placeholderTextColor="#999"
                            style={styles.customAmountInput}
                            keyboardType="numeric"
                          />
                        </S.CustomAmountInput>
                      </S.CustomAmountSection>

                      {validationError ? (
                        <S.ValidationError>
                          <S.Text color="#FF4444" fontSize="14px">
                            {validationError}
                          </S.Text>
                        </S.ValidationError>
                      ) : null}

                      <S.DonateButton onPress={handleNextStep}>
                        <S.Text color="#fff" fontSize="16px" fontWeight="bold">
                          Próxima etapa
                        </S.Text>
                      </S.DonateButton>
                    </>
                  )}

                  {donationStep === "payment" && (
                    <>
                      <S.StepHeader>
                        <TouchableOpacity onPress={handlePreviousStep}>
                          <S.BackButton>
                            <LeftArrow color="#fff" />
                          </S.BackButton>
                        </TouchableOpacity>
                        <S.DonationTitle>
                          <S.Text
                            color="#fff"
                            fontSize="18px"
                            fontWeight="bold"
                          >
                            Forma de pagamento (Donation)
                          </S.Text>
                        </S.DonationTitle>
                        <View style={{ width: 32 }} />
                      </S.StepHeader>

                      <S.DonationDescription>
                        <S.Text color="#999" fontSize="14px">
                          Lorem ipsum sit dolor amet, lorem ipsum sit dolor.
                        </S.Text>
                      </S.DonationDescription>

                      <S.PaymentMethodsContainer>
                        {["PayPal", "Crédito", "Pix", "Boleto bancário"].map(
                          (method) => (
                            <TouchableOpacity
                              key={method}
                              onPress={() => setSelectedPaymentMethod(method)}
                            >
                              <S.PaymentMethodButton
                                selected={selectedPaymentMethod === method}
                              >
                                <S.Text
                                  color={
                                    selectedPaymentMethod === method
                                      ? "#000"
                                      : "#fff"
                                  }
                                  fontSize="14px"
                                  fontWeight="500"
                                >
                                  {method}
                                </S.Text>
                              </S.PaymentMethodButton>
                            </TouchableOpacity>
                          )
                        )}
                      </S.PaymentMethodsContainer>

                      {validationError ? (
                        <S.ValidationError>
                          <S.Text color="#FF4444" fontSize="14px">
                            {validationError}
                          </S.Text>
                        </S.ValidationError>
                      ) : null}

                      <S.DonateButton onPress={handleNextStep}>
                        <S.Text color="#fff" fontSize="16px" fontWeight="bold">
                          Próxima etapa
                        </S.Text>
                      </S.DonateButton>
                    </>
                  )}

                  {donationStep === "processing" && (
                    <S.ProcessingContainer>
                      <Animated.View
                        style={{
                          transform: [
                            {
                              rotate: spinValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "360deg"],
                              }),
                            },
                          ],
                        }}
                      >
                        <S.LoadingSpinner />
                      </Animated.View>
                      <S.Text color="#fff" fontSize="18px" fontWeight="bold">
                        Processando pagamento...
                      </S.Text>
                      <S.Text color="#999" fontSize="14px">
                        Aguarde enquanto processamos sua doação
                      </S.Text>
                    </S.ProcessingContainer>
                  )}

                  {donationStep === "confirmation" && (
                    <S.ConfirmationContainer>
                      <DonationDone />
                      <S.Text color="#fff" fontSize="18px" fontWeight="bold">
                        Doação realizada com sucesso!
                      </S.Text>
                      <S.Text color="#999" fontSize="14px">
                        Obrigado pela sua contribuição
                      </S.Text>
                    </S.ConfirmationContainer>
                  )}
                </S.DonationModal>
              </Animated.View>
            </PanGestureHandler>
          </Animated.View>
        </Modal>
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
    color: "#fff",
    fontSize: 16,
    paddingLeft: 16,
  },
  commentContent: {
    flex: 1,
  },
  customAmountInput: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    padding: 0,
    margin: 0,
  },
});
