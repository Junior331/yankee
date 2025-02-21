import React from "react";
import { Modal } from "react-native";

import * as S from "./styles";
import { IModal } from "./@types";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export const ModalGeneric = ({
  children,
  setModalVisible,
  modalVisible = false,
}: IModal) => {
  const toggleModal = () => setModalVisible((prev) => !prev);
  const AnimatedContainer = Animated.createAnimatedComponent(S.Container);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <AnimatedContainer entering={FadeIn} exiting={FadeOut}>
        <S.Content>{children}</S.Content>
      </AnimatedContainer>
    </Modal>
  );
};
