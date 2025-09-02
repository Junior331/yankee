import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const ChatDuringCall = ({ color = "#FCFBFB", height = 20, width = 20 }: IIcons) => {
  return (
    <SvgXml
      xml={`
         <svg width="${width}" height="${height}" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.3999 6H14.3999M6.3999 10H12.3999M11.3999 15L6.3999 18V15H4.3999C3.60425 15 2.84119 14.6839 2.27858 14.1213C1.71597 13.5587 1.3999 12.7956 1.3999 12V4C1.3999 3.20435 1.71597 2.44129 2.27858 1.87868C2.84119 1.31607 3.60425 1 4.3999 1H16.3999C17.1956 1 17.9586 1.31607 18.5212 1.87868C19.0838 2.44129 19.3999 3.20435 19.3999 4V10M14.3999 19L19.3999 14M19.3999 14V18.5M19.3999 14H14.8999" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    

      `}
    />
  );
};

export default ChatDuringCall;
