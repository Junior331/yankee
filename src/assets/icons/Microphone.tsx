import React from "react";
import {SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const Microphone = ({ width = 20, height = 20, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
         <svg width="${width}" height="${height}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.31579C6 9.78146 6.52678 11.1871 7.46447 12.2235C8.40215 13.2599 9.67392 13.8421 
11 13.8421M11 13.8421C12.3261 13.8421 13.5979 13.2599 14.5355 12.2235C15.4732 11.1871 16 9.78146
 16 8.31579M11 13.8421V17M8.14286 17H13.8571M8.85714 4.36842C8.85714 3.74028 9.08291 3.13786
  9.48477 2.69369C9.88663 2.24953 10.4317 2 11 2C11.5683 2 12.1134 2.24953 12.5152
   2.69369C12.9171 3.13786 13.1429 3.74028 13.1429 4.36842V8.31579C13.1429 8.94393
    12.9171 9.54635 12.5152 9.99052C12.1134 10.4347 11.5683 10.6842 11 10.6842C10.4317 
    10.6842 9.88663 10.4347 9.48477 9.99052C9.08291 9.54635 8.85714 8.94393 8.85714 8.31579V4.36842Z"
     stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `}
    />
  );
};

export default Microphone;

