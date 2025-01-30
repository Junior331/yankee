import React from "react";

import * as S from "./styles";
import { Text } from "../Text";
import { ICheckbox } from "./@types";

export const Checkbox = ({ label, isChecked, setIsChecked }: ICheckbox) => {
  return (
    <S.Container onPress={() => setIsChecked(!isChecked)}>
      <S.Content>
        {isChecked && (
          <Text style={{ fontSize: 10, color: "#2196F3", fontWeight: "bold" }}>
            ✓
          </Text>
        )}
      </S.Content>
      <Text>{label}</Text>
    </S.Container>
  );
};

export default Checkbox;
