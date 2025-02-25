import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const MapPin = ({ width = 30, height = 30, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg width="${width}" height="${height}" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 23.125L11.25 21.25M11.25 21.25L3.75 25V8.75L11.25 5M11.25 21.25V5M11.25 5L18.75 8.75M18.75 8.75L26.25 5V13.75M18.75 8.75V15M23.75 22.5V22.5125M26.4013 25.1513C26.9258 24.6269 27.2831 23.9587 27.4279 23.2312C27.5727 22.5038 27.4985 21.7497 27.2147 21.0644C26.9309 20.3791 26.4502 19.7934 25.8335 19.3813C25.2168 18.9692 24.4917 18.7492 23.75 18.7492C23.0083 18.7492 22.2832 18.9692 21.6665 19.3813C21.0498 19.7934 20.5691 20.3791 20.2853 21.0644C20.0015 21.7497 19.9274 22.5038 20.0721 23.2312C20.2169 23.9587 20.5742 24.6269 21.0988 25.1513C21.6213 25.675 22.505 26.4575 23.75 27.5C25.0637 26.3875 25.9488 25.605 26.4013 25.1513Z"
            stroke="${color}"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>;
      `}
    />
  );
};

export default MapPin;

