import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Modal,
  Animated,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as S from "./styles";
import { IModal } from "./@types";
import Colors from "@/constants/Colors";

export const ModalGeneric = forwardRef(
  (
    {
      style,
      children,
      toValueOpen = 0,
      durationOpen = 300,
      toValueClose = 300,
      durationClose = 300,
    }: IModal,
    ref
  ) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const translateY = useRef(new Animated.Value(600)).current;

    // Estado para rastrear a posição atual do modal
    const translateYValue = useRef(600);

    translateY.addListener(({ value }) => {
      translateYValue.current = value;
    });

    const openModal = () => {
      setIsModalVisible(true);
      Animated.timing(translateY, {
        toValue: toValueOpen,
        duration: durationOpen,
        useNativeDriver: true,
      }).start();
    };

    const closeModal = () => {
      Animated.timing(translateY, {
        toValue: toValueClose,
        duration: durationClose,
        useNativeDriver: true,
      }).start(() => {
        setIsModalVisible(false);
      });
    };

    useImperativeHandle(ref, () => ({
      openModal,
      closeModal,
    }));

    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: (_, gestureState) => {
          // Só ativa o PanResponder se o gesto começar perto do topo do modal
          return gestureState.dy > 80 && translateYValue.current === 0;
        },
        onMoveShouldSetPanResponder: (_, gestureState) => {
          return gestureState.dy > 80 && translateYValue.current === 0;
        },
        onPanResponderMove: (_, gestureState) => {
          if (gestureState.dy > 0) {
            translateY.setValue(gestureState.dy);
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          if (gestureState.dy > 300) {
            closeModal();
          } else {
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }
        },
      })
    ).current;

    return (
      <S.Container>
        <Modal
          transparent
          animationType="none"
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <S.Overlay>
            <Animated.View
              style={[
                styles.modalContainer,
                { transform: [{ translateY }] },
                style,
              ]}
              {...panResponder.panHandlers}
            >
              <TouchableOpacity onPress={closeModal} style={styles.btnClose}>
                <S.Line />
              </TouchableOpacity>
              <ScrollView style={{ maxHeight: "85%" }}>{children}</ScrollView>
            </Animated.View>
          </S.Overlay>
        </Modal>
      </S.Container>
    );
  }
);

const styles = StyleSheet.create({
  modalContainer: {
    padding: 20,
    paddingTop: 5,
    minHeight: 300,
    maxHeight: "90%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Colors.dark.background,
  },
  btnClose: {
    width: "100%",
    minHeight: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
});
