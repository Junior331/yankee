import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const Filter = ({ width = 16, height = 16, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
       <svg width="${width}" height="${height}" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.5H17V3.672C16.9999 4.20239 16.7891 4.71101 16.414 5.086L12 9.5V16.5L6 18.5V10L1.52 5.072C1.18545 4.70393 1.00005 4.2244 1 3.727V1.5Z" stroke="${color}" stroke-width="1.32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `}
      
    />
  );
};

export default Filter;


