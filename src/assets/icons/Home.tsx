import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/constants/Colors";

const Home = ({ color = Colors.dark.background }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.33333 23V15.6667C8.33333 15.0184 8.59087 14.3966 9.04929 13.9382C9.50772 13.4798 10.1295 13.2222 10.7778 13.2222H13.2222C13.8705 13.2222 14.4923 13.4798 14.9507 13.9382C15.4091 14.3966 15.6667 15.0184 15.6667 15.6667V23M3.44444 12H1L12 1L23 12H20.5556V20.5556C20.5556 21.2039 20.298 21.8256 19.8396 22.284C19.3812 22.7425 18.7594 23 18.1111 23H5.88889C5.24058 23 4.61883 22.7425 4.16041 22.284C3.70198 21.8256 3.44444 21.2039 3.44444 20.5556V12Z"
            stroke="${color}"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default Home;
