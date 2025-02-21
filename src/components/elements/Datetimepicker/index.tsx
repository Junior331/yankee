import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as S from "./styles";
import { Arrow } from "@/assets/icons";
import Colors from "@/constants/Colors";
import { ModalGeneric } from "@/components/organism";

export const Datetimepicker = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleDateChange = (_event: any, date?: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleSubmit = () => {
    // setSelectedDate(date);
    setModalVisible(false);
  };

  return (
    <S.Container>
      <S.Dropdown onPress={() => setModalVisible(true)}>
        <S.Text color={Colors.dark.placeholder}>
          {selectedDate ? formatDate(selectedDate) : "Day of Birth"}
        </S.Text>
        <Arrow />
      </S.Dropdown>

      <ModalGeneric
        modalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      >
        <DateTimePicker
          mode="date"
          display="spinner"
          onChange={handleDateChange}
          value={selectedDate || new Date()}
        />
        <S.SubmitButton onPress={() => handleSubmit()}>
          <S.ButtonText>Submit</S.ButtonText>
        </S.SubmitButton>
      </ModalGeneric>
    </S.Container>
  );
};
