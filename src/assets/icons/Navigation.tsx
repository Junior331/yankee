import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/constants/Colors";

const Navigation = ({ color = Colors.dark.background }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.8887 1.23517L13.3887 19.2352C13.3449 19.3309 13.2744 19.412 13.1858 19.4689C13.0972 19.5258 12.9941 19.556 12.8887 19.556C12.7834 19.556 12.6803 19.5258 12.5917 19.4689C12.5031 19.412 12.4326 19.3309 12.3887 19.2352L8.88874 12.2352L1.88874 8.73517C1.793 8.69129 1.71187 8.62085 1.65499 8.53222C1.59811 8.44359 1.56787 8.34048 1.56787 8.23517C1.56787 8.12985 1.59811 8.02675 1.65499 7.93812C1.71187 7.84948 1.793 7.77904 1.88874 7.73517L19.8887 1.23517Z"
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

export default Navigation;
