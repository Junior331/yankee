import React from "react";
import { SvgXml } from "react-native-svg";

import { IIcons } from "./@types";
import Colors from "@/constants/Colors";

const Hearts = ({width = 21, height = 19, color = Colors.dark.background }: IIcons) => {
  return (
    <SvgXml
      xml={`
    <svg width="${width}" height="${height}" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6661 16.5058L9.66607 17.5058L2.16607 10.0778C1.67138 9.59641 1.28171 9.01781 1.02162 8.37843C0.761526 7.73905 0.636634 7.05274 0.65481 6.36273C0.672986 5.67271 0.833836 4.99393 1.12723 4.36913C1.42062 3.74433 1.84021 3.18705 2.35956 2.73237C2.87891 2.2777 3.48678 1.93548 4.14488 1.72727C4.80299 1.51906 5.49708 1.44938 6.18344 1.52259C6.8698 1.59581 7.53357 1.81035 8.13295 2.1527C8.73232 2.49505 9.25432 2.95779 9.66607 3.51179C10.4613 2.45053 11.6456 1.74864 12.9583 1.56054C14.2711 1.37244 15.6048 1.71354 16.6661 2.50879C17.7273 3.30404 18.4292 4.48831 18.6173 5.80106C18.8054 7.11382 18.4643 8.44753 17.6691 9.50879M16.6663 13.5057L14.6663 16.5057H18.6663L16.6663 19.5057" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

     

      `}
    />
  );
};

export default Hearts;
