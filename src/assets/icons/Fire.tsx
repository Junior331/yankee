import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/src/constants/Colors";


const Fire = ({ color = Colors.dark.background }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0022 1.17016C11.0002 1.09446 10.9179 1.04467 10.8523 1.08244C6.84417 3.38889 6.94438 9.23828 6.99154 10.2309C6.9949 10.3016 6.92764 10.3496 6.86299 10.3208C6.42262 10.1242 5.06806 9.33988 5.00247 7.10715C5.00024 7.03134 4.91889 6.98187 4.85305 7.01952C2.54785 8.33788 1 10.7852 1 13.5001C1 17.6422 4.58172 21.0001 9 21.0001C13.4183 21.0001 17 17.6422 17 13.5001C17 7.47389 11.1323 6.18462 11.0022 1.17016Z"
            stroke="${color}"
            stroke-width="2"
          />
        </svg>
      `}
    />
  );
};

export default Fire;
