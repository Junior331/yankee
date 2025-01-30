import React from "react";
import { Modal, Dimensions } from "react-native";

import * as S from "./styles";
import { IModal } from "./@types";

const { height } = Dimensions.get("screen");

export const HalfScreenModal = ({
  children,
  setModalVisible,
  modalVisible = false,
}: IModal) => {
  const toggleModal = () => setModalVisible((prev) => !prev);

  return (
    <Modal
      transparent
      animationType="slide"
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <S.Container activeOpacity={1} onPress={toggleModal}>
        <S.Content height={height / 2}>{children}</S.Content>
      </S.Container>
    </Modal>
  );
};
