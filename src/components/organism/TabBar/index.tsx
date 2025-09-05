import React, { useContext } from "react";

import * as S from "./styles";
import { TabBarProps } from "./@types";
import { TabVisibilityContext } from "@/contexts/tabVisibility";
import { useTheme } from "@/contexts/ThemeContext";
import { Community, Home, Hearts, Navigation, Fire } from "@/assets/icons";
import Colors from "@/constants/Colors";

const routeIcons = {
  community: Community,
  search: Navigation,
  index: Home,
  fire: Fire,
  hearts: Hearts,
};

const routeOrder = ["community", "search", "index", "fire", "hearts"];
const hiddenRoutes = ["profile", "messages", "stories", "notifications"];

export const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const { isVisibility } = useContext(TabVisibilityContext);
  const { theme, colors } = useTheme();
  const orderedRoutes = [...state.routes]
  .filter((route) => !hiddenRoutes.includes(route.name))
  .sort((a: any, b: any) => {
    return routeOrder.indexOf(a.name) - routeOrder.indexOf(b.name);
  });


  return (
    <S.Container $Visible={isVisibility} theme={theme === 'dark' ? Colors.dark : Colors.light} >
      {orderedRoutes.map(
        (route: { key: string | number; name: any; params: any }) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.routes[state.index].name === route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.name,
            });
          };

          const IconComponent =
            routeIcons[label as keyof typeof routeIcons] || Home;

          return (
            <S.ContainerIcon
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              testID={options.tabBarTestID}
              className="flex-1 items-center"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityState={isFocused ? { selected: true } : {}}
              bg_color={isFocused ? colors.background : "transparent"}
            >
              <IconComponent color={isFocused ? colors.icon : (theme === 'dark' ? "#fff" : "#121212")} />
            </S.ContainerIcon>
          );
        }
      )}
    </S.Container>
  );
};
