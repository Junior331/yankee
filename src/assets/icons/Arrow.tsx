import React from "react";
import Svg, { Path } from "react-native-svg";
import { IIcons } from "./@types";

const Arrow = ({ color = "#FAF9F9" }: IIcons) => {
  return (
    <Svg width="12" height="8" fill="none" viewBox="0 0 12 8">
      <Path
        d="M1 1.5L6 6.5L11 1.5"
        stroke={color}
        stroke-width="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Arrow;
