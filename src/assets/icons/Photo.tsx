import React from "react";
import { SvgXml } from "react-native-svg";

const Photo = () => {
  return (
    <SvgXml
      xml={`
        <svg
          width="57"
          height="57"
          viewBox="0 0 57 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 16.3333H35.0267M28.3333 51H11C8.87827 51 6.84344 50.1572 5.34315 48.6569C3.84286 47.1566 3 45.1217 3 43V11C3 8.87827 3.84286 6.84344 5.34315 5.34315C6.84344 3.84286 8.87827 3 11 3H43C45.1217 3 47.1566 3.84286 48.6569 5.34315C50.1572 6.84344 51 8.87827 51 11V28.3333M3 37.6665L16.3333 24.3332C18.808 21.9519 21.8587 21.9519 24.3333 24.3332L35 34.9999M32.3333 32.3332L35 29.6666C36.7867 27.9492 38.8667 27.4692 40.8187 28.2266M37.6667 45.6667H53.6667M45.6667 37.6667V53.6667"
            stroke="#FCFBFB"
            stroke-width="5.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default Photo;