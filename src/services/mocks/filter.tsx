import React from "react";
import { Miles, City, ArrowOfLineTop, ArrowOfLineDown } from "@/assets/icons";

export const optionsFilter = [
  {
    id: 1,
    label: "New",
    value: "New",
    icon: <ArrowOfLineTop />,
  },
  {
    id: 2,
    label: "Old",
    value: "Old",
    icon: <ArrowOfLineDown />,
  },
  {
    id: 3,
    label: "Miles",
    value: "Miles",
    icon: <Miles />,
  },
  {
    id: 4,
    label: "City",
    value: "City",
    icon: <City />,
  },
];
