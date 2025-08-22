import React from "react";
import { SvgXml } from "react-native-svg";
import { IIcons } from "./@types";

const LocationTarget = ({ width = 18, height = 18, color = "white" }: IIcons) => {
  return (
    <SvgXml
      xml={`
<svg width="${width}" height="${height}" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3333 9L9 5.66667M12.3333 9H5.66667M12.3333 9L9 12.3333M9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C3.00026 4.39314 2.44781 5.21993 2.0709 6.12987C1.69399 7.03982 1.5 8.01509 1.5 9C1.5 9.98491 1.69399 10.9602 2.0709 11.8701C2.44781 12.7801 3.00026 13.6069 3.6967 14.3033C4.39314 14.9997 5.21993 15.5522 6.12987 15.9291C7.03982 16.306 8.01509 16.5 9 16.5C10.9891 16.5 12.8968 15.7098 14.3033 14.3033C15.7098 12.8968 16.5 10.9891 16.5 9C16.5 7.01088 15.7098 5.10322 14.3033 3.6967C12.8968 2.29018 10.9891 1.5 9 1.5Z" stroke="${color}" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



      `}
    />
  );
};

export default LocationTarget;
