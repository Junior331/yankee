import React from "react";
import {SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const PhoneCall = ({ width = 42, height = 42, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
               <svg width="${width}" height="${height}" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4062_5616)">
<path d="M33.7242 22.9001L30.3163 26.2804L24.387 23.7108L25.2493 20.3201C22.5018 19.3751 19.5192 19.363 16.7641 20.2857L17.5988 23.6833L11.6489 26.2047L8.26855 22.7969C7.82029 22.345 7.56991 21.7335 7.57249 21.097C7.57507 20.4605 7.8304 19.8511 8.28231 19.4028C11.8059 16.3083 16.3402 14.6104 21.0297 14.6294C25.7192 14.6484 30.2395 16.3831 33.7379 19.506C34.1862 19.9579 34.4366 20.5694 34.434 21.2059C34.4314 21.8424 34.1761 22.4518 33.7242 22.9001Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4062_5616">
<rect width="28.8" height="28.8" fill="white" transform="translate(41.3643 20.8825) rotate(135.232)"/>
</clipPath>
</defs>
</svg>

   

      `}
    />
  );
};

export default PhoneCall;
