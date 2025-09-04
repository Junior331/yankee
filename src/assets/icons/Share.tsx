import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const Share = ({ width = 20, height = 20, color = "#fff" }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="${width}"
          height="${height}"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0134 0.997559V4.99756C4.43837 6.02556 1.99337 11.7856 1.01337 16.9976C0.976372 17.2036 6.39737 11.0356 11.0134 10.9976V14.9976L19.0134 7.99756L11.0134 0.997559Z"
            stroke="${color}"
            stroke-width="1.32"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default Share;