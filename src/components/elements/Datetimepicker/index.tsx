import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

import * as S from "./styles";
import { Arrow } from "@/assets/icons";
import Colors from "@/constants/Colors";
import { HalfScreenModal } from "../../organism/HalfScreenModal";

export const Datetimepicker = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPickerVisible, setPickerVisible] = useState(false);

  const formatDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <S.Container>
      <S.Dropdown onPress={() => setModalVisible(true)}>
        <S.Text color={Colors.dark.placeholder}>
          {selectedDate ? formatDate(selectedDate) : "Day of Birth"}
        </S.Text>
        <Arrow />
      </S.Dropdown>

      <HalfScreenModal
        modalVisible={isModalVisible}
        setModalVisible={setModalVisible}
      >
        <DateTimePicker
          value={selectedDate || new Date()}
          mode="date"
          display="spinner"
          onChange={(event, date) => {
            if (date) {
              setSelectedDate(date);
            }
            setPickerVisible(false);
          }}
        />
      </HalfScreenModal>
    </S.Container>
  );
};
