import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";

export const Slider = () => {
  const [value, setValue] = useState(50);

  const getLabel = (index: number) => options[index];

  const handleSetValue = (index: number) => {
    const currentValue = getLabel(index);
    setValue(value);
  };

  const options = ["0-25", "25-50", "50-100", "+100"];

  return (
    <S.Container>
      <S.Title>Miles</S.Title>
      <S.SliderContainer>
        <S.ContainerOptions>
          {options.map((option, index) => (
            <TouchableOpacity onPress={() => setValue(index)}>
              <S.Text key={index}>{option}</S.Text>
            </TouchableOpacity>
          ))}
        </S.ContainerOptions>
        <S.SliderCustom
          step={1}
          value={value}
          minimumValue={0}
          thumbTintColor="#ffffff"
          maximumTrackTintColor="#888"
          maximumValue={options.length - 1}
          minimumTrackTintColor="#ffffff"
          onValueChange={(value: number) => handleSetValue(value)}
        />
      </S.SliderContainer>
    </S.Container>
  );
};