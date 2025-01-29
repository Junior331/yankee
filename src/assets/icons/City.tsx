
import React from "react";
import { SvgXml } from "react-native-svg";

const City = () => {
  return (
    <SvgXml
      xml={`
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 16.5H16.5M3.16667 16.5V6.5L7.33333 9.83333V6.5L11.5 9.83333H14.8333M14.8333 9.83333V16.5M14.8333 9.83333L13.6367 1.855C13.6219 1.75621 13.5721 1.66601 13.4964 1.60085C13.4207 1.53569 13.3241 1.4999 13.2242 1.5H12.27C12.1712 1.49985 12.0756 1.53479 12.0002 1.59859C11.9248 1.66239 11.8745 1.7509 11.8583 1.84833L10.6667 9M6.5 13.1667H7.33333M10.6667 13.1667H11.5"
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

export default City;
