import React, { useState } from "react";
import { FlatList } from "react-native";

import * as S from "./styles";
import { Text } from "../Text";
import { ISelect } from "./@types";
import { Arrow } from "@/assets/icons";
import Colors from "@/constants/Colors";
import { ModalGeneric } from "../../organism/ModalGeneric";

export const DropDown = ({
  options,
  selectedOption,
  setSelectedOption,
}: ISelect) => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <S.Container>
      <S.Dropdown onPress={() => setModalVisible(true)}>
        <S.Text color={Colors.dark.placeholder}>
          {selectedOption || "Gender"}
        </S.Text>
        <Arrow />
      </S.Dropdown>

      <ModalGeneric
        modalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      >
        <FlatList
          data={options}
          style={{ width: "100%" }}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <S.Option
              onPress={() => {
                setSelectedOption(item);
                setModalVisible(false);
              }}
            >
              <Text style={{ textAlign: "center" }}>{item}</Text>
            </S.Option>
          )}
        />
      </ModalGeneric>
    </S.Container>
  );
};

export default DropDown;
