import React, { useState } from "react";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as S from "./styles";
import { Arrow } from "@/assets/icons";
import Colors from "@/constants/Colors";
import { ModalGeneric } from "@/components/organism";

export const Datetimepicker = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false); // Para controlar o DatePicker no Android

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const handleDateChange = (_event: any, date?: Date) => {
    if (Platform.OS === "android") {
      setShowPicker(false);
    }
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleSubmit = () => {
    setModalVisible(false);
  };

  return (
    <S.Container>
      <S.Dropdown
        onPress={() => {
          Platform.OS === "ios" ? setModalVisible(true) : setShowPicker(true);
        }}
      >
        <S.Text color={Colors.dark.placeholder}>
          {selectedDate ? formatDate(selectedDate) : "Day of Birth"}
        </S.Text>
        <Arrow />
      </S.Dropdown>

      {Platform.OS === "ios" ? (
        <ModalGeneric modalVisible={isModalVisible} setModalVisible={setModalVisible}>
          <DateTimePicker
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            value={selectedDate || new Date()}
          />
          <S.SubmitButton onPress={handleSubmit}>
            <S.ButtonText>Submit</S.ButtonText>
          </S.SubmitButton>
        </ModalGeneric>
      ) : (
        showPicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            value={selectedDate || new Date()}
          />
        )
      )}
    </S.Container>
  );
};
