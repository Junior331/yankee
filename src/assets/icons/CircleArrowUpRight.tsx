import React from "react";
import {SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const CircleArrowUpRight = ({ width = 31, height = 31, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
          <svg width="${width}" height="${height}" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.375 11.625L11.625 19.375M19.375 11.625V19.375M19.375 11.625H11.625M3.875 15.5C3.875 17.0266
 4.17569 18.5383 4.7599 19.9487C5.34411 21.3591 6.2004 22.6406 7.27988 23.7201C8.35936 24.7996 9.64089
  25.6559 11.0513 26.2401C12.4617 26.8243 13.9734 27.125 15.5 27.125C17.0266 27.125 18.5383 26.8243
   19.9487 26.2401C21.3591 25.6559 22.6406 24.7996 23.7201 23.7201C24.7996 22.6406 25.6559 21.3591
    26.2401 19.9487C26.8243 18.5383 27.125 17.0266 27.125 15.5C27.125 12.4169 25.9002 9.45999 
    23.7201 7.27988C21.54 5.09977 18.5831 3.875 15.5 3.875C12.4169 3.875 9.45999 5.09977 7.27988 
    7.27988C5.09977 9.45999 3.875 12.4169 3.875 15.5Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `}
    />
  );
};

export default CircleArrowUpRight;

