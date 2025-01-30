import React from "react";
import { Switch as SwitchElement } from "react-native";

import * as S from "./styles";
import { ISwitch } from "./@types";
import { Container } from "./styles";

export const Switch = ({ isActive, handleToggle, label, style }: ISwitch) => {
  return (
    <Container onPress={() => handleToggle(!isActive)} style={style}>
      <SwitchElement
        value={isActive}
        onValueChange={(value) => handleToggle(value)}
        thumbColor={isActive ? "#f4f3f4" : "#f4f3f4"}
        trackColor={{ false: "#767577", true: "#1976D2" }}
      />
      <S.Text>{label}</S.Text>
    </Container>
  );
};

export default Switch;
