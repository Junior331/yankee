import { Image } from "expo-image";
import { TabBarIconProps } from "./@types";

export const TabBarIcon = ({ url, alt }: TabBarIconProps) => {
  return (
    <Image
      alt={alt}
      source={url}
      contentFit="contain"
      style={{ width: 38, height: 38 }}
    />
  );
};
