import React from "react";
import Svg, { Path } from "react-native-svg";
import { IIcons } from "@/assets/icons/@types";

const LeftArrow = ({ width = 26, height = 26, color = "white" }: IIcons) => {
  return (
    <Svg width={height} height={width} viewBox="0 0 27 27" fill="none">
      <Path
        d="M15 6L9 12L15 18"
        stroke={`${color}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
