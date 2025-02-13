import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const PaperClip = ({ width = 16, height = 16, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
          <svg width="${width}" height="${height}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.9998 4.66662L5.66647 8.99996C5.40125 9.26517 5.25226 9.62488 5.25226 9.99996C5.25226 
10.375 5.40125 10.7347 5.66647 11C5.93169 11.2652 6.2914 11.4142 6.66647 11.4142C7.04154 11.4142
 7.40125 11.2652 7.66647 11L11.9998 6.66662C12.5302 6.13619 12.8282 5.41677 12.8282 4.66662C12.8282
  3.91648 12.5302 3.19706 11.9998 2.66662C11.4694 2.13619 10.7499 1.8382 9.9998 1.8382C9.24966 1.8382
   8.53024 2.13619 7.9998 2.66662L3.66647 6.99996C2.87082 7.79561 2.42383 8.87474 2.42383 9.99996C2.42383
    11.1252 2.87082 12.2043 3.66647 13C4.46212 13.7956 5.54125 14.2426 6.66647 14.2426C7.79169 14.2426 8.87082
     13.7956 9.66647 13L13.9998 8.66662" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `}
    />
  );
};

export default PaperClip;
