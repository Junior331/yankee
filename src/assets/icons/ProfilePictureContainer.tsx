import React from "react";
import { SvgXml } from "react-native-svg";

const ProfilePictureContainer = () => {
  return (
    <SvgXml
      xml={`
        <svg
          width="172"
          height="172"
          viewBox="0 0 172 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <rect width="172" height="172" rx="86" fill="#636262" />
          <path
            d="M94 75.3333H94.0267M87.3333 110H70C67.8783 110 65.8434 109.157 64.3431 107.657C62.8429 106.157 62 104.122 62 102V70C62 67.8783 62.8429 65.8434 64.3431 64.3431C65.8434 62.8429 67.8783 62 70 62H102C104.122 62 106.157 62.8429 107.657 64.3431C109.157 65.8434 110 67.8783 110 70V87.3333M62 96.6665L75.3333 83.3332C77.808 80.9519 80.8587 80.9519 83.3333 83.3332L94 93.9999M91.3333 91.3332L94 88.6666C95.7867 86.9492 97.8667 86.4692 99.8187 87.2266M96.6667 104.667H112.667M104.667 96.6667V112.667"
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

export default ProfilePictureContainer;
