import { ReactNode, createContext, useMemo, useState } from "react";

interface ITabVisibility {
  isVisibility: boolean;
  setIsVisibility: (value: boolean) => void;
}

export const TabVisibilityContext = createContext<ITabVisibility>({
  isVisibility: false,
  setIsVisibility: () => {},
} as ITabVisibility);

export const TabVisibilityProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isVisibility, setIsVisibility] = useState<boolean>(true);

  const value = useMemo(
    () => ({ isVisibility, setIsVisibility }),
    [isVisibility, setIsVisibility]
  );
  return (
    <TabVisibilityContext.Provider value={value}>
      {children}
    </TabVisibilityContext.Provider>
  );
};
