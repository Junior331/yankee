import React from "react";
import { SvgXml } from "react-native-svg";

const ArrowOfLineDown = () => {
  return (
    <SvgXml
      xml={`
        <svg
          width="12"
          height="14"
          viewBox="0 0 12 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 1.16667V12.8333M6 12.8333L11 7.83334M6 12.8333L1 7.83334"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default ArrowOfLineDown;
