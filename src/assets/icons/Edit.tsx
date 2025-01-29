import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/src/constants/Colors";

const Edit = ({
  width = 15,
  height = 15,
  color = Colors.dark.background,
}: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          fill="none"
          width="${width}"
          height="${height}"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25016 2.41676L12.5835 5.75009M1.3335 13.6668H4.66683L13.4168 4.91676C13.6357 4.69789 13.8093 4.43805 13.9278 4.15208C14.0462 3.86611 14.1072 3.55962 14.1072 3.25009C14.1072 2.94056 14.0462 2.63406 13.9278 2.3481C13.8093 2.06213 13.6357 1.80229 13.4168 1.58342C13.198 1.36455 12.9381 1.19094 12.6522 1.07248C12.3662 0.954033 12.0597 0.893066 11.7502 0.893066C11.4406 0.893066 11.1341 0.954033 10.8482 1.07248C10.5622 1.19094 10.3024 1.36455 10.0835 1.58342L1.3335 10.3334V13.6668Z"
            stroke="${color}"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default Edit;
