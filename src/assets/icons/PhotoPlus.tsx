import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const PhotoPlus = ({ width = 41, height = 41, color = "#808080" }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="${width}"
          height="${height}"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.5 13.8333H25.5167M21.3333 35.5H10.5C9.17392 35.5 7.90215 34.9732 6.96447 34.0355C6.02678 33.0979 5.5 31.8261 5.5 30.5V10.5C5.5 9.17392 6.02678 7.90215 6.96447 6.96447C7.90215 6.02678 9.17392 5.5 10.5 5.5H30.5C31.8261 5.5 33.0979 6.02678 34.0355 6.96447C34.9732 7.90215 35.5 9.17392 35.5 10.5V21.3333M5.5 27.1666L13.8333 18.8333C15.38 17.3449 17.2867 17.3449 18.8333 18.8333L25.5 25.4999M23.8333 23.8333L25.5 22.1666C26.6167 21.0933 27.9167 20.7933 29.1367 21.2666M27.1667 32.1667H37.1667M32.1667 27.1667V37.1667"
            stroke="${color}"
            stroke-width="3.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default PhotoPlus;


