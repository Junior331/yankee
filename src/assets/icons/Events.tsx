import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const MapPinEvents = ({
  width = 11,
  height = 11,
  color = "#039855",
}: IIcons) => {
  return (
    <SvgXml
      xml={`
        <svg
          width="${width}"
          height="${height}"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.3335 1.375V3.20833M3.66683 1.375V3.20833M1.8335 5.04167H9.16683M1.8335 3.20833C1.8335 2.96522 1.93007 2.73206 2.10198 2.56015C2.27389 2.38824 2.50705 2.29167 2.75016 2.29167H8.25016C8.49328 2.29167 8.72644 2.38824 8.89834 2.56015C9.07025 2.73206 9.16683 2.96522 9.16683 3.20833V8.70833C9.16683 8.95145 9.07025 9.18461 8.89834 9.35651C8.72644 9.52842 8.49328 9.625 8.25016 9.625H2.75016C2.50705 9.625 2.27389 9.52842 2.10198 9.35651C1.93007 9.18461 1.8335 8.95145 1.8335 8.70833V3.20833ZM3.66683 6.875H4.5835V7.79167H3.66683V6.875Z"
            stroke="${color}"
            stroke-width="0.7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `}
    />
  );
};

export default MapPinEvents;

