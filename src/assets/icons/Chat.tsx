import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/constants/Colors";

const Chat = ({ color = Colors.dark.background }: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="14"
          height="13"
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.33333 4.00002H9.66667M4.33333 6.66669H8.33333M5 10H3C2.46957 10 1.96086 9.78931 1.58579 9.41423C1.21071 9.03916 1 8.53045 1 8.00002V2.66669C1 2.13625 1.21071 1.62755 1.58579 1.25247C1.96086 0.877401 2.46957 0.666687 3 0.666687H11C11.5304 0.666687 12.0391 0.877401 12.4142 1.25247C12.7893 1.62755 13 2.13625 13 2.66669V8.00002C13 8.53045 12.7893 9.03916 12.4142 9.41423C12.0391 9.78931 11.5304 10 11 10H9L7 12L5 10Z"
            stroke="${color}"
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default Chat;
