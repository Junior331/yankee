import React from "react";
import { Community, Navigation, Home, Fire, Hearts } from "@/assets/icons";

export const routesTabBar = (color: string) => [
  {
    id: 1,
    label: "Community",
    route: "Community",
    icon: (isActive: boolean) => (
      <Community color={isActive ? "#FFF" : color} />
    ),
  },
  {
    id: 2,
    label: "Navigation",
    route: "Navigation",
    icon: (isActive: boolean) => (
      <Navigation color={isActive ? "#FFF" : color} />
    ),
  },
  {
    id: 3,
    label: "Home",
    route: "Home",
    icon: (isActive: boolean) => <Home color={isActive ? "#FFF" : color} />,
  },
  {
    id: 4,
    label: "Fire",
    route: "Fire",
    icon: (isActive: boolean) => <Fire color={isActive ? "#FFF" : color} />,
  },
  {
    id: 5,
    label: "Hearts",
    route: "Hearts",
    icon: (isActive: boolean) => <Hearts color={isActive ? "#FFF" : color} />,
  },
];
