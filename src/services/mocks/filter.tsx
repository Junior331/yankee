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

export const events = [
  {
    id: "1",
    name: "Show de Rock",
    latitude: 42.3601,
    longitude: -71.0589,
    category: "Música",
    count: 10,
  },
  {
    id: "2",
    name: "Feira de Artesanato",
    latitude: 42.3701,
    longitude: -71.0389,
    category: "Feira",
    count: 5,
  },
];

export const filters = [
  { id: "music", label: "Música" },
  { id: "fair", label: "Feira" },
  { id: "sports", label: "Esportes" },
];
