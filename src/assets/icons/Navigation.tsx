import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/constants/Colors";

const Navigation = ({ color = Colors.dark.background }: IIcons) => {
  return (
    <SvgXml
      xml={`
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.65303 12.3396L19.653 1.3396M8.65303 12.3396L12.153 
                  19.3396C12.1969 19.4353 12.2673 19.5165 12.356 19.5734C12.4446 
                  19.6302 12.5477 19.6605 12.653 19.6605C12.7583 19.6605 12.8614 
                  19.6302 12.9501 19.5734C13.0387 19.5165 13.1092 19.4353 13.153 
                  19.3396L19.653 1.3396M8.65303 12.3396L1.65302 8.8396C1.55728 
                  8.79573 1.47615 8.72529 1.41927 8.63665C1.36239 8.54802 
                  1.33215 8.44492 1.33215 8.3396C1.33215 8.23428 1.36239 
                  8.13118 1.41927 8.04255C1.47615 7.95391 1.55728 7.88347
                   1.65302 7.8396L19.653 1.3396" stroke="${color}" stroke-width="1.32" 
                   stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
  

      `}
    />
  );
};

export default Navigation;
