import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const X = ({ width = 14, height = 15, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
         <svg width="${width}" height="${height}" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.5 4L3.5 11M3.5 4L10.5 11"
              stroke="${color}"
              stroke-width="1.16667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
      `}
    />
  );
};

export default X;

