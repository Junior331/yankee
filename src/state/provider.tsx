import React, { ReactNode } from "react";
import { TabVisibilityProvider } from "@/contexts/tabVisibility";

type ProviderType = {
  children: ReactNode;
};

const Provider: React.FC<ProviderType> = ({ children }) => {
  return <TabVisibilityProvider>{children}</TabVisibilityProvider>;
};

export default Provider;
